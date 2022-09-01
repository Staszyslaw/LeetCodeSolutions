let buf = new ArrayBuffer(4),
    f32=new Float32Array(buf),
    u32=new Uint32Array(buf);

function mySqrt(x: number) {
  let x2 = 0.5 * (f32[0] = x);
  u32[0] = (0x5f3759df - (u32[0] >> 1));
  let y = f32[0];
  y = y * ( 1.5 - ( x2 * y * y ) );   // 1st iteration
  y = y * ( 1.5 - ( x2 * y * y ) );   // 2nd iteration
  y = y * ( 1.5 - ( x2 * y * y ) );   // 3rd iteration
  return Math.floor(1/y);
}
