//https://leetcode.com/problems/two-sum/

class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        int[] output = new int[2];
        
        for(int i=0; i<nums.length; i++){
            for(int j=i+1; j<nums.length; j++){
                int sumOfNums = nums[i] + nums[j];
                
                if(sumOfNums == target){
                    output[0] = i;
                    output[1] = j;
                    
                    return output;
                }
            }
        }     
        return output;      
    }
}