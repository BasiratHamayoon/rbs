"use client"
import { createContext, useContext, useReducer, useEffect } from 'react';

const ProjectContext = createContext();

const initialState = {
  projects: {},
  loading: false,
  error: null,
  categories: []
};

const projectReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, projects: action.payload };
    case 'FETCH_CATEGORIES_SUCCESS':
      return { ...state, categories: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const fetchProjects = async (category = 'all') => {
    dispatch({ type: 'FETCH_START' });
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const url = category === 'all' 
        ? `${baseUrl}/projects`
        : `${baseUrl}/projects?category=${category}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch projects');
      
      const data = await response.json();
      
      // Transform the data to match frontend structure
      const allProjects = data.data.projects.map(project => ({
        id: project._id,
        title: project.title,
        category: project.category,
        description: project.description,
        shortDescription: project.shortDescription,
        image: project.images?.[0]?.url || '/Projects/default.jpg',
        images: project.images?.map(img => img.url) || [],
        duration: project.duration,
        size: project.size,
        location: project.location,
        client: project.client,
        completionDate: new Date(project.completionDate).toLocaleDateString(),
        technologies: project.technologies || [],
        features: project.features || [],
        status: project.status,
        featured: project.featured
      }));

      // Group by category
      const formattedProjects = {
        all: allProjects,
        ...allProjects.reduce((acc, project) => {
          const category = project.category.toLowerCase();
          if (!acc[category]) acc[category] = [];
          acc[category].push(project);
          return acc;
        }, {})
      };
      
      dispatch({ type: 'FETCH_SUCCESS', payload: formattedProjects });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  const fetchCategories = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(`${baseUrl}/projects/categories`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      
      const data = await response.json();
      dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: data.data.categories });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, []);

  return (
    <ProjectContext.Provider value={{
      ...state,
      fetchProjects,
      refetchProjects: fetchProjects
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};