import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

const AddCategory = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8 px-4 sm:px-15 py-4 sm:py-6 ">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Add Category</h1>
      <Card className="border-0 bg-gray-50">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle className="text-lg sm:text-xl">New Category Details</CardTitle>
          <CardDescription className="text-sm sm:text-base">Fill in the details to add a new product category.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:gap-6 px-4 sm:px-6">
          <div className="grid gap-2">
            <Label htmlFor="categoryName">Category Name</Label>
            <Input id="categoryName" placeholder="e.g., Electronics, Clothing" className='border-1 border-gray-300 bg-white'/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="categoryDescription">Description</Label>
            <Textarea id="categoryDescription" placeholder="Brief description of the category" className='border-1 border-gray-300 bg-white'/>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="active-mode" className='border-1 border-gray-300' />
            <Label htmlFor="active-mode">Active</Label>
          </div>
          <Button className="w-full sm:w-fit bg-violet-600 text-white text-sm sm:text-base">Add Category</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddCategory;