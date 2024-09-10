// components/AssistanceSection.js
import Card from "./Card";
import ChatPopup from "./ChatPopup";
import QuestionCard from "./QuestionCard";

export default function AssistanceSection() {
  return (
    <section className="mt-8 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        How can we assist you today?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card
          title="Company Search"
          description="Which company is providing the best Services?"
        />
        <Card
          title="Policy Guidance"
          description="What type of insurance is right for me?"
        />
        <Card
          title="Premium Estimates"
          description="How much will I need to pay?"
        />
      </div>

      <ChatPopup />
    </section>
  );
}