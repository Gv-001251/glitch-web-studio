import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: "Starter",
    price: "Free",
    badge: null,
    features: [
      "Basic document templates",
      "5 documents per month",
      "Standard support",
      "Basic authentication",
      "Email notifications"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    id: 2,
    name: "Professional",
    price: "$29",
    period: "/month",
    badge: "Most Popular",
    features: [
      "All premium templates",
      "Unlimited documents",
      "Priority support",
      "Advanced security features",
      "Team collaboration",
      "Custom branding",
      "API access"
    ],
    buttonText: "Upgrade Now",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    badge: null,
    features: [
      "White-label solution",
      "Unlimited everything",
      "Dedicated support",
      "Custom integrations",
      "Advanced analytics",
      "SLA guarantee",
      "On-premise deployment"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Account & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your document platform needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id}
              className={`relative p-8 text-center transition-all duration-500 hover:-translate-y-2 animate-scale-in ${
                plan.popular 
                  ? 'border-primary shadow-primary scale-105 bg-gradient-to-b from-primary/5 to-transparent' 
                  : 'hover:shadow-card bg-card/50 backdrop-blur-sm'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-4 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-left">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button 
                variant={plan.buttonVariant}
                size="lg"
                className={`w-full ${
                  plan.popular 
                    ? 'bg-gradient-primary hover:shadow-primary' 
                    : 'hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary">
            Compare all features →
          </Button>
        </div>
      </div>
    </section>
  );
};