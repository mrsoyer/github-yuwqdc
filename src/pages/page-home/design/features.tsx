import { features } from '@/data/features.data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function HomeFeatures() {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pourquoi choisir Weinvest ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}