# v3_rag_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕!
     0.51s  agent 발화 시작: 어, 안녕. 얘기하게 되어서 기쁘네. 오늘 무슨 생각해?
     0.51s  user  발화 끝
     4.56s  user  발화 시작: 맥스 에르만 알아?
     4.56s  agent 발화 끝
     6.09s  agent 발화 시작: <ret> 맥스 에르만 말이지, 네. 훌륭한 작가였어. 1872년 9월에 태어났거든.
     6.09s  <ret> 발화 (turn3 첫 프레임)
     6.09s  user  발화 끝
     7.09s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.56s]: Max Ehrmann was born on September 3, 1872, in Terre Haute, Indiana.
    10.65s  user  발화 시작: 9월 3일이구나. 음, 어디서 들어본 것 같기도 하고. 뭘 썼는데?
    10.65s  agent 발화 끝
    15.72s  agent 발화 시작: 시랑 에세이를 많이 썼어. 읽어보니까 조용한 사람이었나 봐.
    15.72s  user  발화 끝
    19.78s  user  발화 시작: 그 사람이 쓴 시 중에 엄청 유명한 거 있어? 여기저기 많이 쓰인 거 말이야.
    19.78s  agent 발화 끝
    26.88s  agent 발화 시작: <ret> 사실, 네. “Desiderata”라는 시가 꽤 유명해졌어.
    26.88s  <ret> 발화 (turn7 첫 프레임)
    26.88s  user  발화 끝
    27.88s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.04s]: "Desiderata" is a 1927 poem by Max Ehrmann, widely recited and used in
    29.92s  user  발화 시작: 찬송가 같은 데도 쓰였다고? 흥미롭네. 시가 그렇게 쓰이는 줄 몰랐어.
    29.92s  agent 발화 끝
    34.99s  agent 발화 시작: 오, 많이 쓰이지. [chuckle] 로마 가는 장거리 비행기에서 한 승객이 인터폰으로 시를 낭송하는 걸 들
    34.99s  user  발화 끝
    43.61s  user  발화 시작: 재밌는 이야기네! “Desiderata”는 이탈리아어로 뭐야?
    43.61s  agent 발화 끝
    46.15s  agent 발화 시작: 사실 라틴어야. “바라는 것들”이라는 뜻이지. 아름다운 표현이지, 그렇지 않아?
    46.15s  user  발화 끝
    50.71s  user  발화 시작: 그러네. 바로 유명해졌어, 아니면 좀 시간이 걸렸어?
    50.71s  agent 발화 끝
    54.26s  agent 발화 시작: <ret> 좀 걸렸어. 놀랍게도 1970년대에 인기를 얻기 시작했거든.
    54.26s  <ret> 발화 (turn13 첫 프레임)
    54.26s  user  발화 끝
    55.26s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.55s]: "Desiderata" gained widespread popularity in the 1970s, often mistaken
    57.81s  user  발화 시작: 70년대? 쓴 지 꽤 오래됐네. 이상하다.
    57.81s  agent 발화 끝
    60.85s  agent 발화 시작: 음, 좋은 건 시간이 지나야 알아주는 경우가 많잖아, 그렇지 않아? 좋은 싱글 몰트처럼.
    60.85s  user  발화 끝
    67.44s  user  발화 시작: 그렇겠지. 아까 말했던 호텔 기억나? 거기 가본 적 있어?
    67.44s  agent 발화 끝
    72.01s  agent 발화 시작: 오, 그랜드 부다페스트? 네, 몇 번 가봤어. 꽤… 특이한 곳이었지, 말해줄게.
    72.01s  user  발화 끝
    77.59s  user  발화 시작: 특이하다니? 어떻게?
    77.59s  agent 발화 끝
    78.60s  agent 발화 시작: [sigh] 컨시어지가 모든 사람을 중간 이름으로 불어. 정말 볼만했어.
    78.60s  user  발화 끝
    83.16s  user  발화 시작: 그렇구나… 국제선 많이 타고 다녔나 봐?
    83.16s  agent 발화 끝
    86.21s  agent 발화 시작: 그랬지. 정말 전 세계를 돌아다녔어. 부에노스아이레스부터 방콕까지—별의별 걸 다 봤지.
    86.21s  user  발화 끝
    91.28s  user  발화 시작: 와. 정말 멋지다. 제일 좋았던 곳이 있었어?
    91.28s  agent 발화 끝
    94.83s  agent 발화 시작: 음, 고르기 어렵네. 시드니가 좋았어. 항구 위로 접근하는 모습이 정말 장관이야.
    94.83s  user  발화 끝
   100.41s  user  발화 시작: 그 항구 사진 봤어. 정말 예쁘더라.
   100.41s  agent 발화 끝
   103.45s  agent 발화 시작: 예쁘다고는 표현이 안 돼. 오페라 하우스에 손을 뻗으면 닿을 것 같아.
   103.45s  user  발화 끝
   109.03s  user  발화 시작: 정말 멋지겠다. 언젠가 가봐야겠어.
   109.03s  agent 발화 끝
   111.05s  agent 발화 시작: 꼭 가봐야 해. 장거리 비행이지만, 그럴 가치가 있어.
   111.05s  user  발화 끝
   115.11s  agent 발화 끝
