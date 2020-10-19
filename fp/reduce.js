var tree = [
  {
    id: '1',
    label: '价值属性',
    children: [
      {
        id: '1-1',
        label: '用户分层',
        children: []
      }
    ]
  },
  {
    id: '2',
    label: '购课属性',
    children: [
      {
        id: '2-1',
        label: '课程',
        children: [
          {
            id: '2-1-1',
            label: '课程ID',
            children: []
          },
          {
            id: '2-1-2',
            label: '课程数量',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '3',
    label: '基础属性',
    children: [
      {
        id: '3-1',
        label: '年级',
        children: []
      },
      {
        id: '3-2',
        label: '身份',
        children: []
      },
      {
        id: '3-3',
        label: '省份',
        children: [
          {
            id: '3-3-1',
            label: '河北省',
            children: []
          },
          {
            id: '3-3-2',
            label: '河南省',
            children: []
          }
        ]
      }
    ]
  }
];

function flatTree(tree, labels = '') {
  return tree.reduce((res, item) => {
    if (item.children && item.children.length) {
      res = res.concat(flatTree(item.children, labels + '/' + item.label))
    } else {
      res.push({ id: item.id, label: item.label, parents: labels.slice(1) })
    }
    return res
  }, []);
}

flatTree(tree)