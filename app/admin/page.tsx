"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ListingForm } from "../admin/add";

interface Listing {
  _id: string;
  name: string;
  price: number;
  createdAt: string;
  postedBy: {
    name: string;
    email: string;
  };
  status: "active" | "pending";
}

export default function AdminDashboard() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchListings = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/listings");
      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.error("Failed to fetch listings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const filteredListings = listings.filter(listing =>
    listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.postedBy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.postedBy.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleListingAdded = () => {
    fetchListings();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Admin Dashboard</CardTitle>
            <div className="flex gap-4">
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add New Listing</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px]">
                  <DialogHeader>
                    <DialogTitle>Add New Listing</DialogTitle>
                  </DialogHeader>
                  <ListingForm onSuccess={handleListingAdded} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <ReloadIcon className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Listing</TableHead>
                  <TableHead>Posted By</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Date Posted</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredListings.map((listing) => (
                  <TableRow key={listing._id}>
                    <TableCell className="font-medium">{listing.name}</TableCell>
                    <TableCell>{listing.postedBy.name}</TableCell>
                    <TableCell>{listing.postedBy.email}</TableCell>
                    <TableCell>Rs. {listing.price}</TableCell>
                    <TableCell>
                      {new Date(listing.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        listing.status === "active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {listing.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}