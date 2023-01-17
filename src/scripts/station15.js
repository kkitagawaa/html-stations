async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affilication: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affilication: 'HogeHoge大学', is_student: true }
  ];
  const result = await test(3, userList)
  return result
}

function buildFullName(data) {
  // Station14の問題はこちらです。想定する答えをここを書いてください。
  // 氏名がわかるようにしつつ、半角スペースで繋いでください。
  // またtest配列のそれぞれのオブジェクトに対して、full_nameのプロパティが追加されるように実装すること
  
  return {
      id: data.id,
      full_name: `${data.family_name} ${data.first_name}`,
      first_name: data.first_name,
      family_name: data.family_name,
      affilication: data.affilication,
      is_student: data.is_student,
  }
}

async function test(sec, data) {
  await new Promise((resolve) => {
    setTimeout(resolve, sec*1000);
  });
  return data.map(buildFullName)
}

