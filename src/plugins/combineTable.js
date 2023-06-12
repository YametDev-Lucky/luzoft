export default function(tablehead, tablebody){
  return tablehead.map( val => ({
    ...val,
    desserts: tablebody[val.tabID],
  }))
}