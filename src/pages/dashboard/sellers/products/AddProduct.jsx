
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import StatusDropdown from "../../../../components/dashboard/ui/StatusDropdown";


export const AddProduct = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-3 lg:p-10">
      <header>
        <div className="mx-auto flex flex-col lg:flex-row justify-between max-w-7xl py-4 lg:py-6 px-2 sm:px-4 lg:px-8 gap-4">
          <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">Add Product</h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              variant="outline"
              className="border-1 border-violet-600 text-violet-600 text-sm"
            >
              Discard
            </Button>
            <Button
              variant="outline"
              className="border-1 border-violet-600 text-violet-600 text-sm"
            >
              Save Draft
            </Button>
            <Button className="bg-violet-600 hover:bg-gray-900 text-white text-sm">
              Publish
            </Button>
          </div>
        </div>
      </header>

      <main className="p-3 lg:p-6">
        <div className="grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
          <div className="lg:col-span-2 grid gap-4 lg:gap-6">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Product name"
                      className="border-1 border-gray-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sku" className="mb-2">
                        SKU
                      </Label>
                      <Input
                        id="sku"
                        type="text"
                        placeholder="SKU"
                        className="border-1 border-gray-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="barcode" className="mb-2">
                        Barcode
                      </Label>
                      <Input
                        id="barcode"
                        type="text"
                        placeholder="Barcode"
                        className="border-1 border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea
                      id="description"
                      placeholder="Set a description to the product for better visibility."
                      className="border-1 border-gray-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
                  <div>
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-4 text-sm text-gray-500">
                      Drop your images here or click to upload
                    </p>
                    <p className="text-xs text-gray-400 mb-3">
                      PNG or JPG (max. 5MB)
                    </p>

                    <input
                      id="file-upload"
                      type="file"
                      accept="image/png, image/jpeg"
                      multiple
                      className="sr-only"
                    />

                    <label
                      htmlFor="file-upload"
                      className="inline-flex items-center gap-2 mt-2 cursor-pointer rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-violet-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                    >
                      <Upload className="w-4 h-4" />
                      Select Images
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6 lg:order-last">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div>
                  <Label htmlFor="basePrice" className="mb-2">
                    Base Price
                  </Label>
                  <Input
                    id="basePrice"
                    type="number"
                    placeholder="Enter price"
                    className="border-1 border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="discountPrice" className="mb-2">
                    Discounted Price
                  </Label>
                  <Input
                    id="discountPrice"
                    type="number"
                    placeholder="Enter discounted price"
                    className="border-1 border-gray-300"
                  />
                </div>
                <div className="flex items-center space-x-2 border-t border-gray-300 pt-4">
                  <Checkbox id="tax" />
                  <Label htmlFor="tax">Charge tax on this product</Label>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Status</CardTitle>
              </CardHeader>
              <CardContent>
                <StatusDropdown />
                <p className="text-xs text-gray-500 mt-2">
                  Set the product status.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Size</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Label htmlFor="size">Item Size</Label>
                  <Input
                    id="size"
                    type="text"
                    placeholder="XL, L, M..."
                    className="border-1 border-gray-300"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;