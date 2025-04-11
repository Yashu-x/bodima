"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ListingFormProps {
  onSuccess: () => void;
}

export function ListingForm({ onSuccess }: ListingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    mainImage: "",
    images: ["", ""],
    address: "",
    description: "",
    gender: "",
    roomCapacity: "1",
    price: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !formData.name ||
      !formData.mobileNumber ||
      !formData.mainImage ||
      !formData.address ||
      !formData.description ||
      !formData.gender ||
      !formData.roomCapacity ||
      !formData.price
    ) {
      setError("Please fill all required fields");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    if (Number(formData.price) <= 0) {
      setError("Price must be greater than 0");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          images: formData.images.filter((img) => img.trim() !== ""),
          roomCapacity: Number(formData.roomCapacity),
          price: Number(formData.price),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create listing");
      }

      setFormData({
        name: "",
        mobileNumber: "",
        mainImage: "",
        images: ["", ""],
        address: "",
        description: "",
        gender: "",
        roomCapacity: "1",
        price: "",
      });

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create listing");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddImageField = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ""],
    }));
  };

  const handleRemoveImageField = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="max-h-[80vh] overflow-y-auto pr-2">
      <form onSubmit={handleSubmit} className="space-y-4 pb-4">
        {/* Property Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Property Name*</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter property name"
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="space-y-2">
          <Label htmlFor="mobileNumber">Mobile Number*</Label>
          <Input
            id="mobileNumber"
            value={formData.mobileNumber}
            onChange={(e) =>
              setFormData({ ...formData, mobileNumber: e.target.value })
            }
            placeholder="Enter 10-digit mobile number"
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Main Image */}
        <div className="space-y-2">
          <Label htmlFor="mainImage">Main Image URL*</Label>
          <Input
            id="mainImage"
            value={formData.mainImage}
            onChange={(e) =>
              setFormData({ ...formData, mainImage: e.target.value })
            }
            placeholder="Enter main image URL"
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Additional Images */}
        <div className="space-y-2">
          <Label>Additional Images</Label>
          {formData.images.map((image, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={image}
                onChange={(e) => {
                  const newImages = [...formData.images];
                  newImages[index] = e.target.value;
                  setFormData({ ...formData, images: newImages });
                }}
                placeholder={`Image URL ${index + 1}`}
                disabled={isSubmitting}
              />
              {index >= 2 && (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => handleRemoveImageField(index)}
                  disabled={isSubmitting}
                >
                  ×
                </Button>
              )}
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={handleAddImageField}
            disabled={isSubmitting}
          >
            Add Another Image
          </Button>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address">Full Address*</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            placeholder="Enter full address"
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description*</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Describe the property..."
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Gender Selection */}
        <div className="space-y-2">
          <Label>Gender Preference*</Label>
          <Select
            value={formData.gender}
            onValueChange={(value) =>
              setFormData({ ...formData, gender: value })
            }
            disabled={isSubmitting}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male Only</SelectItem>
              <SelectItem value="female">Female Only</SelectItem>
              <SelectItem value="both">Both Genders</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Room Capacity */}
        <div className="space-y-2">
          <Label>Room Capacity*</Label>
          <Select
            value={formData.roomCapacity}
            onValueChange={(value) =>
              setFormData({ ...formData, roomCapacity: value })
            }
            disabled={isSubmitting}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select room capacity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Single (1 person)</SelectItem>
              <SelectItem value="2">Double (2 persons)</SelectItem>
              <SelectItem value="3">Triple (3 persons)</SelectItem>
              <SelectItem value="4">Quad (4 persons)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price */}
        <div className="space-y-2">
          <Label htmlFor="price">Monthly Price (Rs.)*</Label>
          <Input
            id="price"
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            placeholder="Enter monthly price"
            disabled={isSubmitting}
            required
          />
        </div>

        {/* Error & Submit */}
        {error && <div className="text-red-500 text-sm">{error}</div>}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Creating Listing...
            </>
          ) : (
            "Create Listing"
          )}
        </Button>
      </form>
    </div>
  );
}
