import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { AlertDialogFooter } from "../ui/alert-dialog";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";

const FormSchema = z.object({
  SupplierName: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  category: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  deliveryDate: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  type: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  sign: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  color: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  length: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  width: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  quantity: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  squareMeter: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  PricePerMetre: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  total: z.string().min(2, {
    message: "مساحة فارغة",
  }),
  deliveryNumber: z.string().min(2, {
    message: "مساحة فارغة",
  }),
});

const AddPurchases = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      SupplierName: "",
      category: "",
      color: "",
      deliveryDate: "",
      deliveryNumber: "",
      length: "",
      PricePerMetre: "",
      quantity: "",
      sign: "",
      squareMeter: "",
      total: "",
      type: "",
      width: "",
    },
  });

  function onSubmit() {
    toast.success("قمت بإضافة منتج جديد");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="SupplierName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="اسم المورد" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* //? SEC LINE */}
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="deliveryNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="رقم التسليم" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="الصنف" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* //? THIRD LINE */}
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="العدد" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* //? FORTH LINE */}
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name="length"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="الطول" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="العرض" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="squareMeter"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="المتر المربع" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* //? FIFTH LINE */}
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="اللون" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sign"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="الرسمة" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="النوع" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* //? SIXTH LINE */}
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="PricePerMetre"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="ثمن المتر	" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="total"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="المجموع	" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* //? CONFIRM LINE */}
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="secondary">Cancel</Button>
          </AlertDialogCancel>
          <Button type="submit" className="mb-2 md:mb-0">
            Submit
          </Button>
        </AlertDialogFooter>
      </form>
    </Form>
  );
};

export default AddPurchases;
