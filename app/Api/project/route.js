import { NextResponse } from 'next/server';
import { projectsData } from '@/data/projectsData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'all';
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const projects = projectsData[category] || projectsData.all;
  
  return NextResponse.json({
    success: true,
    data: projects,
    total: projects.length,
    category
  });
}