import { NoteCard } from "@/components/custom/note-card";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-5 gap-y-5">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl">Basic Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Note Title"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="note">Note</Label>
                </div>
                <Textarea id="note" required />
              </div>
            </div>
          </form>
        </CardContent>
        
        <CardFooter>
          <Button type="submit" className="w-full">
            Add Note
          </Button>
        </CardFooter>
      </Card>
      <div className="w-full flex flex-col items-center justify-center gap-y-3">
        <NoteCard title="Sample Note Card" note="ldfjlsfjl sfjowei jljdlfsfjlsf" />
        <NoteCard title="Sample Note Card" note="ldjfslfjlseelrekjj dkfjlwef lsfje" />
      </div>
      
    </div>
  );
}
