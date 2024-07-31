import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function Home() {
  return (
    <div className="flex items-center justify-center">
    <Card>
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>using vercel SDK to creat a chat bot.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>mensagem</p>
      </CardContent>
      <CardFooter>
        form
      </CardFooter>
    </Card>
    </div>
  );
}
