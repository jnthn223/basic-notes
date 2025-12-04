import * as React from 'react';
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export interface INoteCardProps {
    title: string;
    note: string;
}

export function NoteCard (props: INoteCardProps) {
  return (
    <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.note}</CardDescription>
        </CardHeader>
        <CardFooter>
            <Button className='mr-2' variant={"outline"}>Edit</Button>
            <Button variant={"destructive"}>Delete</Button>
        </CardFooter>
    </Card>
  );
}
