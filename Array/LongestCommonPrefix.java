class Solution {
    public static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";

       for (int i = 0; i < strs[0].length(); i++){
          
            for(int j = 1; j < strs.length; j++){

                   if(strs[0].charAt(i) != strs[j].charAt(i)){
                    return strs[0].substring(0,i);                 
                   } 
                   
                }
                
            }
            
            return "";   
        
    }

    public static void main(String[] args) {
           
        String[] arr = {"flower","flow","floght"} ;
        System.out.println(longestCommonPrefix(arr));
    }
}