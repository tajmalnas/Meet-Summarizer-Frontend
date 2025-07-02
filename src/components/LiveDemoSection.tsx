import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const LiveDemoSection = () => {
  const [inputText, setInputText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [useFileUpload, setUseFileUpload] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [outputData, setOutputData] = useState(null); // structured JSON output

  const handleExtract = async () => {
    setIsLoading(true);
    setOutputData(null);

    try {
      let response;

      if (useFileUpload && selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);

        response = await fetch("http://localhost:3000/process-meeting", {
          method: "POST",
          body: formData,
        });
      } else if (!useFileUpload && inputText.trim()) {
        response = await fetch("http://localhost:3000/process-meeting", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: inputText.trim() }),
        });
      } else {
        alert("Please provide meeting notes or upload a valid .txt file.");
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setOutputData(data);
    } catch (err) {
      console.error(err);
      setOutputData({ error: err.message });
    }

    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Try It <span className="gradient-text">Live</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Paste your meeting notes <strong>or</strong> upload a <code>.txt</code> file to generate structured insights.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Card */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Input Type</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className={!useFileUpload ? "font-bold" : "text-muted-foreground"}>Text</span>
                  <Switch
                    checked={useFileUpload}
                    onCheckedChange={(val) => {
                      setUseFileUpload(val);
                      setInputText("");
                      setSelectedFile(null);
                    }}
                  />
                  <span className={useFileUpload ? "font-bold" : "text-muted-foreground"}>File</span>
                </div>
              </div>

              {/* Text or File Input */}
              {!useFileUpload ? (
                <Textarea
                  placeholder="Paste your meeting notes here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[200px] mb-4 resize-none"
                />
              ) : (
                <div className="mb-4">
                  <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue-600 rounded-lg shadow-md border border-blue-200 cursor-pointer hover:bg-blue-100 transition">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.88 9.94a1 1 0 00-.27-.7l-6-6a1 1 0 00-1.42 0l-6 6a1 1 0 001.42 1.42L9 5.41V17a1 1 0 102 0V5.41l4.29 4.3a1 1 0 001.42-1.42z" />
                    </svg>
                    <span className="mt-2 text-base">
                      {selectedFile ? selectedFile.name : "Choose a .txt file"}
                    </span>
                    <input
                      type="file"
                      accept=".txt"
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                      className="hidden"
                    />
                  </label>
                </div>
              )}

              <Button
                onClick={handleExtract}
                disabled={isLoading || (!inputText.trim() && !selectedFile)}
                className="w-full"
                size="lg"
              >
                {isLoading ? "Extracting Minutes..." : "Extract Minutes"}
              </Button>
            </Card>

            {/* Output Card */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Structured Output</h3>

              {/* Raw JSON Output */}
              <div className="bg-gray-900 text-green-400 rounded-lg p-4 min-h-[200px] font-mono text-sm overflow-auto mb-6">
                {isLoading ? (
                  <div className="animate-pulse">
                    <div>Processing your meeting notes...</div>
                    <div className="mt-2">🤖 AI is analyzing content...</div>
                    <div className="mt-2">📝 Extracting key information...</div>
                  </div>
                ) : outputData ? (
                  <pre className="whitespace-pre-wrap">{JSON.stringify(outputData, null, 2)}</pre>
                ) : (
                  <div className="text-gray-500">Click "Extract Minutes" to see the magic!</div>
                )}
              </div>

              {/* Pretty UI below raw output */}
              {!isLoading && outputData && !outputData.error && (
                <div className="space-y-6">
                  {/* Summary */}
                  <div>
                    <h4 className="text-md font-semibold mb-2 text-green-500">📌 Summary</h4>
                    <div className="bg-green-100 text-green-900 p-4 rounded-md">
                      {outputData.summary}
                    </div>
                  </div>

                  {/* Decisions */}
                  <div>
                    <h4 className="text-md font-semibold mb-2 text-blue-500">📋 Key Decisions</h4>
                    <ul className="list-disc list-inside text-blue-800">
                      {outputData.decisions.map((d: string, idx: number) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Items */}
                  <div>
                    <h4 className="text-md font-semibold mb-2 text-purple-500">✅ Action Items</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {outputData.actionItems.map((item: any, idx: number) => (
                        <div
                          key={idx}
                          className="border border-purple-200 bg-purple-50 rounded-lg p-4 shadow-sm"
                        >
                          <p className="text-md font-bold mb-1">{item.task}</p>
                          {item.owner && (
                            <p className="text-sm text-gray-700">
                              👤 <strong>Owner:</strong> {item.owner}
                            </p>
                          )}
                          {item.due && (
                            <p className="text-sm text-gray-700">
                              📅 <strong>Due:</strong> {item.due}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
