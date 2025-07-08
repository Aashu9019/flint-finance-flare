
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: '', email: '', phone: '', service: '' });
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-flint-maroon to-flint-maroon/90">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-2xl animate-scale-in">
            <CardHeader className="text-center pb-6">
              <CardTitle className="font-montserrat text-3xl lg:text-4xl font-bold text-flint-maroon">
                Speak with an Adviser
              </CardTitle>
              <p className="font-montserrat text-gray-600 text-lg mt-4">
                Get your free consultation and discover how we can help you achieve your property goals.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-montserrat font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-2 font-montserrat"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-montserrat font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="mt-2 font-montserrat"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="font-montserrat font-medium text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-2 font-montserrat"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="font-montserrat font-medium text-gray-700">
                    What can we help you with? *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="mt-2 font-montserrat">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="first-home">First Home Purchase</SelectItem>
                      <SelectItem value="investment">Investment Property</SelectItem>
                      <SelectItem value="refinancing">Refinancing</SelectItem>
                      <SelectItem value="construction">Construction Loan</SelectItem>
                      <SelectItem value="commercial">Commercial Loan</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-flint-coral hover:bg-flint-coral/90 text-white py-4 text-lg font-montserrat font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Book My Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
