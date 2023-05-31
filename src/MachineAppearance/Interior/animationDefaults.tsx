import { MotionValue, useMotionValue as umv } from "framer-motion";
export let x_arr: Array<Array<MotionValue<number>>> = [
    [umv(0), umv(0), umv(0), umv(0)], 
    [umv(0), umv(0), umv(0), umv(0)], 
    [umv(0), umv(0), umv(0), umv(0)], 
    [umv(0), umv(0), umv(0), umv(0)], 
    [umv(0), umv(0), umv(0), umv(0)]];

export let y_arr: Array<Array<MotionValue<number>>> = [
    [umv(0), umv(0), umv(0), umv(0)], 
    [umv(0), umv(0), umv(0), umv(0)], 
    [umv(0), umv(0), umv(0), umv(0)], 
    [umv(0), umv(0), umv(0), umv(0)], 
    [umv(0), umv(0), umv(0), umv(0)]];

export let scale_arr: Array<Array<MotionValue<number>>> = [
    [umv(1), umv(1), umv(1), umv(1)], 
    [umv(1), umv(1), umv(1), umv(1)], 
    [umv(1), umv(1), umv(1), umv(1)], 
    [umv(1), umv(1), umv(1), umv(1)], 
    [umv(1), umv(1), umv(1), umv(1)]];