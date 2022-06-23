/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i, j, merged = [], nums1Done = 0, nums2Done = 0;
    for(i = 0, j = 0; merged.length < nums1.length + nums2.length;){
        if(i < nums1.length && j < nums2.length){
            if(nums1[i] <= nums2[j]){
                merged.push(nums1[i]);
                i++;
            }else{
                merged.push(nums2[j]);
                j++;
            }
        } else if(i < nums1.length){
            merged = [...merged, ...nums1.splice(i, nums1.length)];
            break;
        } else {
           merged = [...merged, ...nums2.splice(j, nums2.length)];
           break;
        }
    }
    let mid = Math.floor(merged.length/2);
    return (merged.length%2 == 0) ? (merged[mid] + merged[mid - 1])/2 : merged[mid];
};