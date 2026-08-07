    // 表示するセリフをまとめておく
  const idleMessages = [
    { text: '「いらっしゃいませ〜！\n　来てくれてありがとう！」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: 'gumiMouth' },
    { text: '「売り物を見たい場合はSHOP、ご依頼の場合はORDERを選んでね！」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: 'gumiMouth' },
    { text: '「プロフィールを見たい場合はテムくんをタップだ！」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: 'gumiMouth' },
    { text: '「テムくんは部屋の隅にいる白ウサギさ。部屋の主について教えてくれるよ」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeRClose',
      temWink: 'temEyeRClose',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: 'gumiMouth' },
    { text: '「僕の事？そうだなぁ…\n『グミちゃん』とでも呼んでくれると嬉しいな！」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: 'gumiMouth' },
    { text: '「グミ☆ちゃんとの違い…？\n hahaha, nani wo itteru noka \n wakannnai na !」',
      temEyeL: 'temEyeLHalf',
      temEyeR: 'temEyeRHalf',
      temWink: '',
      gumiEyeL: 'gumiEyeLHalf',
      gumiEyeR: 'gumiEyeRHalf',
      gumiEyeLIris: 'gumiEyeLIrisHalf',
      gumiEyeRIris: 'gumiEyeRIrisHalf',
      moveIris: '',
      gumiMouth: 'gumiMouth' },
    { text: '（中の人など・・・・・・いない！）',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: '' },
    { text: '「・・・・・・」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: '' },
    { text: '「・・・・・・・・・・・・」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: '' },
    { text: '「本棚とか机とか置いてみたけど、だいぶヒトが住んでる感出たね〜」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: 'gumiMouth' },
    { text: '「思ってたより手狭になったなぁ……ちょっと次家具を増やすときは考えないと」',
      temEyeL: 'temEyeLClose',
      temEyeR: 'temEyeRClose',
      temWink: '',
      gumiEyeL: 'gumiEyeLHalf',
      gumiEyeR: 'gumiEyeRHalf',
      gumiEyeLIris: 'gumiEyeLIrisHalf',
      gumiEyeRIris: 'gumiEyeRIrisHalf',
      moveIris: '',
      gumiMouth: 'gumiMouth' },
    { text: '「・・・・・・」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: '' },
    { text: '「・・・・・・」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: '' },
    { text: '「・・・ボーッとしてどうしたんだい？」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: 'gumiMouth' },
    { text: '「あ、もしかして案内を読み飛ばしちゃったのかな？\nじゃあもう一回説明しよう！」',
      temEyeL: 'temEyeLOpen',
      temEyeR: 'temEyeROpen',
      temWink: '',
      gumiEyeL: 'gumiEyeLOpen',
      gumiEyeR: 'gumiEyeROpen',
      gumiEyeLIris: 'gumiEyeLIrisOpen',
      gumiEyeRIris: 'gumiEyeRIrisOpen',
      moveIris: '',
      gumiMouth: 'gumiMouth' }
  ];
  let idleIndex = 0;
  let idleTimer = null;
  // 前のコマ送りのタイマーIDを保持する変数
  let typeTimer = null;
  // セリフの文字数から待ち時間を計算する(空白・改行は文字数に含めない)
  function calcIdleDelay(text) {
    const length = text.replace(/[ 　\n]/g, '').length;
    return (length * 0.1 + 3) * 1000; // 文字数(秒) + 3秒 → ミリ秒に変換
  }
  // 選択肢を非表示にする
  function clearChoices() {
    document.getElementById('choiceList').innerHTML = '';
  }
  // 次のセリフに進める共通処理(タイマーからもクリックからも呼ぶ)
  const idleLoopEnd = 13;
  function advanceIdleMessage() {
    if (idleIndex >= idleLoopEnd) {
      idleIndex = 1;
    } else {
      idleIndex++;
    }
    clearChoices();
    displayMessage(idleMessages[idleIndex], true);
    scheduleIdleMessage(idleMessages[idleIndex].text);
  }
  // 次のセリフへ進むタイマーをセットする
  function scheduleIdleMessage(text) {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      advanceIdleMessage();
    }, calcIdleDelay(text));
  }
  // メッセージボックスをクリックしたら、コマ送り中でも即・次のセリフへ
  document.querySelector('.message-box').addEventListener('click', () => {
    const translateInput = document.getElementById('translateInput');
    const choiceList = document.getElementById('choiceList');

    // 翻訳入力中はクリックを無視する
    if (translateInput && !translateInput.classList.contains('hidden')) {
      return;
    }
    // 選択肢表示時はクリックを無視する
    if (choiceList && choiceList.children.length > 0) {
      return;
    }
    advanceIdleMessage();
  });
  // 1文字ずつコマ送りで表示する関数
  function typeText(el, text, speed = 60) {
    // 前のコマ送りを止める
    if (typeTimer) {
      clearTimeout(typeTimer);
      typeTimer = null;
    }

    let i = 0;
    el.textContent = '';
    function step() {
      if (i < text.length) {
        el.textContent += text[i];
        i++;
        typeTimer = setTimeout(step, speed); // IDをtypeTimerに保存する
      }
    }
    step();
  }
  // テキストの表示幅を測る関数
  function measureTextWidth(text) {
  const canvas = measureTextWidth._canvas || (measureTextWidth._canvas = document.createElement('canvas'));
  const ctx = canvas.getContext('2d');
  const msgText = document.getElementById('messageText');
  const style = getComputedStyle(msgText);
  ctx.font = `${style.fontSize} ${style.fontFamily}`;
  return ctx.measureText(text).width;
  }
  // 画面幅が740px以上の時、改行を非表示にする関数
  function stripSpaceForWide(text) {
    const msgBox = document.querySelector('.message-box');

    if (window.matchMedia('(min-width: 740px)').matches) {
      const stripped = text.replace(/[ \n]/g, '');
      const width = measureTextWidth(stripped);

      if (width > 740) {
        // 長すぎる時は折り返し表示に切り替えて、元のテキストのまま返す
        msgBox.classList.add('wrap-mode');
        return text;
      } else {
        msgBox.classList.remove('wrap-mode');
        return stripped;
      }
    }

    msgBox.classList.remove('wrap-mode');
    return text;
  }
  // 今表示中のメッセージの元テキストを保持しておく
  let currentRawMessage = '';

  function displayMessage(rawText, useTyping = true) {
  // セリフだけを文字列で渡された時は、表情はいじらずテキストだけ差し替える
  const hasFace = (typeof rawText === 'object' && rawText !== null);
  const text = hasFace ? rawText.text : rawText;

  currentRawMessage = rawText;
  if (hasFace) {
    setFace(rawText);
  }
  const msgText = document.getElementById('messageText');
  const processed = stripSpaceForWide(text);

    if (useTyping) {
      typeText(msgText, processed, 60);
    } else {
      // コマ送りを止めて即座に切り替え
      if (typeTimer) {
        clearTimeout(typeTimer);
        typeTimer = null;
      }
      msgText.textContent = processed;
    }
  }

  // 740pxのブレイクポイントをまたいだ瞬間に再描画
  const breakpointQuery = window.matchMedia('(min-width: 740px)');
  breakpointQuery.addEventListener('change', () => {
    if (currentRawMessage) {
      displayMessage(currentRawMessage, false); // コマ送りなしで即切り替え
    }
  });
  // SHOP・ORDER・シーン選択の関数
  const shopData = {
    text: '「現在は3つのショップから\n　販売を行なっているよ！」',
    temEyeL: 'temEyeLOpen',
    temEyeR: 'temEyeROpen',
    temWink: '',
    gumiEyeL: 'gumiEyeLOpen',
    gumiEyeR: 'gumiEyeROpen',
    gumiEyeLIris: 'gumiEyeLIrisOpen',
    gumiEyeRIris: 'gumiEyeRIrisOpen',
    moveIris: '',
    gumiMouth: 'gumiMouth',
    choices: [
      { label: 'BOOTH',     url: 'https://vtb001.booth.pm/' },
      { label: 'PIXTA',     url: 'https://creator.pixta.jp/@eteoil' },
      { label: 'LINEスタンプ', url: 'https://store.line.me/stickershop/author/2410058/ja' },
    ]
  };

  const orderData = {
    text: '「現在は3つのルートから\n　依頼を受けているよ！」',
    temEyeL: 'temEyeLOpen',
    temEyeR: 'temEyeROpen',
    temWink: '',
    gumiEyeL: 'gumiEyeLOpen',
    gumiEyeR: 'gumiEyeROpen',
    gumiEyeLIris: 'gumiEyeLIrisOpen',
    gumiEyeRIris: 'gumiEyeRIrisOpen',
    moveIris: '',
    gumiMouth: 'gumiMouth',
    choices: [
      { label: 'Skeb',          url: 'https://skeb.jp/@eteoil' },
      { label: 'つなぐ',         url: 'https://tsunagu.cloud/users/eteoil' },
      { label: 'Pixivリクエスト', url: 'https://www.pixiv.net/users/23216671/request' },
    ]
  };
  const calendarData = {
    text: 'ダサいカレンダーがある',
    temEyeL: 'temEyeLHalf',
    temEyeR: 'temEyeRHalf',
    temWink: '',
    gumiEyeL: 'gumiEyeLHalf',
    gumiEyeR: 'gumiEyeRHalf',
    gumiEyeLIris: 'gumiEyeLIrisHalf',
    gumiEyeRIris: 'gumiEyeRIrisHalf',
    moveIris: 'is-moveLeft',
    gumiMouth: '',
    choices: [
      { label: '確認してみる',          action: openPopup },
      { label: 'ダッセェなぁ……',          action: restartIdleLoop },
    ]
  };

  const bookshelfData = {
    text: '専門書・小説・マンガ等が並んでいる',
    temEyeL: 'temEyeLOpen',
    temEyeR: 'temEyeROpen',
    temWink: '',
    gumiEyeL: 'gumiEyeLOpen',
    gumiEyeR: 'gumiEyeROpen',
    gumiEyeLIris: 'gumiEyeLIrisOpen',
    gumiEyeRIris: 'gumiEyeRIrisOpen',
    moveIris: 'is-moveTop',
    gumiMouth: '',
    choices: [
      { label: '専門書を手にとる',          url: 'https://www.foriio.com/eteoil' },
      { label: 'シリーズ物の本を手にとる',          url: 'https://note.com/eteoil/n/nac6506e4dcbe' },
    ]
  };

  const bookData = {
    text: '誰かの日記帳のようだ',
    temEyeL: 'temEyeLOpen',
    temEyeR: 'temEyeROpen',
    temWink: '',
    gumiEyeL: 'gumiEyeLOpen',
    gumiEyeR: 'gumiEyeROpen',
    gumiEyeLIris: 'gumiEyeLIrisOpen',
    gumiEyeRIris: 'gumiEyeRIrisOpen',
    moveIris: 'is-moveLeft',
    gumiMouth: '',
    choices: [
      { label: '雑記部分を読む',          url: 'https://note.com/eteoil/m/med63620e2cb8' },
      { label: 'らくがきを眺める',          url: 'https://eteoil.fanbox.cc/' },
    ]
  };

  const temData = {
    text: 'テムくんが部屋の主について教えてくれるようだ',
    temEyeL: 'temEyeLOpen',
    temEyeR: 'temEyeRClose',
    temWink: 'temEyeRClose',
    gumiEyeL: 'gumiEyeLOpen',
    gumiEyeR: 'gumiEyeROpen',
    gumiEyeLIris: 'gumiEyeLIrisOpen',
    gumiEyeRIris: 'gumiEyeRIrisOpen',
    moveIris: 'is-moveLeft',
    gumiMouth: '',
    choices: [
      { label: '教えてテムくん',          url: 'https://taittsuu.com/users/eteoil/profiles' },
      { label: '興味ないね',          action: restartIdleLoop },
    ]
  };

  const gumiData = {
    action: restartIdleLoop
  };
  // アイドルループを「SHOP・ORDER案内」から再スタートさせる
  function restartIdleLoop() {
    idleIndex = 1;
    clearChoices();
    displayMessage(idleMessages[idleIndex], true);
    scheduleIdleMessage(idleMessages[idleIndex].text);
  }
  // SHOP・ORDERをクリックした時の処理
  function showChoices(data) {
    clearTimeout(idleTimer);
    const choiceList = document.getElementById('choiceList');

    displayMessage(data, true);

    choiceList.innerHTML = '';
    data.choices.forEach(item => {
      const el = document.createElement('span');
      el.className = 'choice-item';
      el.textContent = item.label;
      el.addEventListener('click', (event) => {
        event.stopPropagation();
        if (item.action) {
          item.action();
        } else {
          window.open(item.url, '_blank');
        }
      });
      choiceList.appendChild(el);
    });
  }
  // シーン内のボタンをクリックした時の処理
  const sceneButtons = [
    { id: 'calendarBtn',  data: calendarData },
    { id: 'bookshelfBtn', data: bookshelfData },
    { id: 'bookBtn',      data: bookData },
    { id: 'temBtn',       data: temData },
    { id: 'gumiBtn',      data: gumiData },
  ];

  sceneButtons.forEach(({ id, data }) => {
    document.getElementById(id).addEventListener('click', () => {
      const translateInput = document.getElementById('translateInput');
      const translateButtons = document.getElementById('translateButtons');
      if (translateInput) {
        translateInput.classList.add('hidden');
      }
      if (translateButtons) {
        translateButtons.classList.add('hidden');
      }
      if (data.action) {
        data.action();
      } else {
        showChoices(data);
      }
    });
  });
  // 表情変化の関数
function setFace({ temEyeL, temEyeR, temWink, gumiEyeL, gumiEyeR, gumiEyeLIris, gumiEyeRIris, gumiMouth, moveIris }) {
    // 一旦、全表情パーツのis-active・is-moveを外す
    document.querySelectorAll('[id*="temEye"],[id*="gumiEye"],[id*="gumiMouth"]')
      .forEach(el => el.classList.remove('is-active'));
    document.querySelectorAll('[id*="gumiEyeLIris"],[id*="gumiEyeRIris"]')
      .forEach(el => el.classList.remove('is-moveLeft', 'is-moveTop'));
    document.querySelectorAll('#temEyeLClose, #temEyeRClose')
      .forEach(el => el.classList.remove('is-wink'));

    // 指定された表情のパーツにis-activeを付ける(空文字・undefinedは除外)
    const activeIds = [temEyeL, temEyeR, temWink, gumiEyeL, gumiEyeR, gumiMouth].filter(id => id);
    if (activeIds.length > 0) {
      document.querySelectorAll(activeIds.map(id => `#${id}`).join(', '))
        .forEach(el => el.classList.add('is-active'));
    }

    // 指定された表情のパーツにis-moveを付ける
    const irisIds = [gumiEyeLIris, gumiEyeRIris].filter(id => id);
    if (irisIds.length > 0) {
      document.querySelectorAll(irisIds.map(id => `#${id}`).join(', '))
        .forEach(el => {
          el.classList.add('is-active');
          if (moveIris) {
            el.classList.add(moveIris);
          }
        });
    }

    // 指定された表情のパーツにis-winkを付ける
    if (temWink) {
      document.querySelectorAll(`#${temWink}`)
        .forEach(el => el.classList.add('is-wink'));
    }
  }
  // ポップアップの表示・非表示(表示状態はopen/closeクラスだけで管理する)
  function openPopup() {
    const popupBg = document.querySelector('.popupBg');
    popupBg.classList.remove('close');
    popupBg.classList.add('open');
  }
  function closePopup() {
    const popupBg = document.querySelector('.popupBg');
    popupBg.classList.remove('open');
    popupBg.classList.add('close');
  }
  // フェードアウトが終わったらcloseを外して、.popupBgのdisplay:noneに戻す
  // (closePopupの中で登録するとクリックの度にリスナーが増えてしまうので、ここで一度だけ登録する)
  const popupBgEl = document.querySelector('.popupBg');
  if (popupBgEl) {
    popupBgEl.addEventListener('animationend', (event) => {
      if (event.animationName === 'fadeOut' && popupBgEl.classList.contains('close')) {
        popupBgEl.classList.remove('close');
      }
    });
  }
  // 表情パーツは初期状態だと全部display:noneなので、最初の表情を先に当てておく
  // (オープニングのスライド中にキャラの目や口が欠けて見えるのを防ぐ)
  setFace(idleMessages[0]);
