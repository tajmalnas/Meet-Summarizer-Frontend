
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CodeSampleSection = () => {
  const curlExample = `curl -X POST https://api.meetingextractor.com/extract \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Meeting notes go here..."
  }'`;

  const responseExample = `{
  "summary": "Weekly team meeting covering project milestones and upcoming deadlines.",
  "decisions": [
    "Approved budget increase for Q4",
    "Selected vendor for new CRM system"
  ],
  "actionItems": [
    {
      "task": "Finalize vendor contract",
      "owner": "Sarah Johnson",
      "due": "2024-01-15"
    },
    {
      "task": "Update project timeline",
      "owner": "Mike Chen",
      "due": "2024-01-12"
    }
  ],
}`;

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Developer <span className="gradient-text">Friendly</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple API integration with comprehensive documentation
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="request" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="request">API Request</TabsTrigger>
              <TabsTrigger value="response">JSON Response</TabsTrigger>
            </TabsList>
            
            <TabsContent value="request">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">cURL Example</h3>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm font-mono whitespace-pre-wrap">{curlExample}</pre>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="response">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Expected Response</h3>
                <div className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm font-mono whitespace-pre-wrap">{responseExample}</pre>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CodeSampleSection;
