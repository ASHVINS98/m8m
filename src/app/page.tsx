"use client"
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
const Page = () => {
  
  const trpc = useTRPC();
  const { data} = useQuery(trpc.getWorkflows.queryOptions())
  const queryClient = useQueryClient()
  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess(){
      toast.success("Workflow creation triggered")
    }
  }))
  
  return (
    <div className='min-h-screen flex items-center justify-center'>
      Protected server component
      {JSON.stringify(data)}
      <Button onClick={() => create.mutate()}>Create Workflow</Button>
    </div>
  );
}

export default Page;
