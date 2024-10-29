export const TrimContent = (s,l)=>{
    if(s.length <= l) return s;
    return s.substring(0,l)+"...";
}