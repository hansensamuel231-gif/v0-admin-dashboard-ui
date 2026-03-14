'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard() {
  const [formData, setFormData] = useState({
    productName: '',
    batchNumber: '',
    imageUrl: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ productName: '', batchNumber: '', imageUrl: '' });
  };

  const recentRegistrations = [
    { id: 1, productName: 'Premium Coffee Beans', batchNumber: 'CB-2024-001', registeredDate: '2024-03-10', status: 'Minted' },
    { id: 2, productName: 'Organic Tea Collection', batchNumber: 'TC-2024-002', registeredDate: '2024-03-09', status: 'Minted' },
    { id: 3, productName: 'Artisan Chocolate Bar', batchNumber: 'CB-2024-003', registeredDate: '2024-03-08', status: 'Minted' },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-border shadow-sm">
        <div className="p-6 border-b border-border">
          <h1 className="text-2xl font-bold text-primary">BlockReg</h1>
          <p className="text-xs text-muted-foreground mt-1">Product Registration</p>
        </div>
        
        <nav className="p-4 space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors font-medium text-sm">
            <span className="flex items-center gap-3">
              <span className="w-5 h-5 bg-muted rounded flex items-center justify-center text-xs">📊</span>
              Dashboard
            </span>
          </button>
          
          <button className="w-full text-left px-4 py-3 rounded-lg bg-primary text-primary-foreground transition-colors font-medium text-sm">
            <span className="flex items-center gap-3">
              <span className="w-5 h-5 flex items-center justify-center text-xs">📝</span>
              Register Product
            </span>
          </button>
          
          <button className="w-full text-left px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors font-medium text-sm">
            <span className="flex items-center gap-3">
              <span className="w-5 h-5 bg-muted rounded flex items-center justify-center text-xs">📜</span>
              History
            </span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-background">
        <div className="p-8 max-w-7xl">
          {/* Page Header */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-2">Register New Product to Blockchain</h2>
            <p className="text-muted-foreground">Register your product and mint it as an NFT on the blockchain</p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="border border-border shadow-sm">
                <CardHeader className="border-b border-border">
                  <CardTitle className="text-xl">Product Details</CardTitle>
                  <CardDescription>Enter the information about your product</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Product Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">Product Name</label>
                      <Input
                        type="text"
                        name="productName"
                        placeholder="e.g., Premium Coffee Beans"
                        value={formData.productName}
                        onChange={handleInputChange}
                        className="border border-border bg-white text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Batch Number */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">Batch Number</label>
                      <Input
                        type="text"
                        name="batchNumber"
                        placeholder="e.g., CB-2024-001"
                        value={formData.batchNumber}
                        onChange={handleInputChange}
                        className="border border-border bg-white text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Product Image URL */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">Product Image URL</label>
                      <Input
                        type="url"
                        name="imageUrl"
                        placeholder="https://example.com/image.jpg"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        className="border border-border bg-white text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base py-6 rounded-lg transition-all hover:shadow-lg"
                    >
                      Register & Mint NFT
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Recent Registrations Table */}
            <div className="lg:col-span-1">
              <Card className="border border-border shadow-sm h-full">
                <CardHeader className="border-b border-border">
                  <CardTitle className="text-lg">Recent Registrations</CardTitle>
                  <CardDescription>Latest minted products</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-0 font-semibold text-foreground text-xs uppercase tracking-wide">Product</th>
                          <th className="text-left py-3 px-0 font-semibold text-foreground text-xs uppercase tracking-wide">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {recentRegistrations.map((item) => (
                          <tr key={item.id} className="hover:bg-secondary/50 transition-colors">
                            <td className="py-3 px-0">
                              <div>
                                <p className="font-medium text-foreground truncate">{item.productName}</p>
                                <p className="text-xs text-muted-foreground">{item.batchNumber}</p>
                              </div>
                            </td>
                            <td className="py-3 px-0">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
