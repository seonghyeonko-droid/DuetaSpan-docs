# v3_noinfo_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 5월 1일에 선셋 리지 에스테이트 방문하려고.
     2.82s  <ret> 발화 (turn1 첫 프레임)
     2.98s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.43s]: (tool result) Sunset Ridge Estates is available May first at 10:00 AM 
     3.38s  user  발화 끝
     3.41s  agent 발화 시작: <ret> 음, 5월 1일에 오전 10시랑 오후 2시에 자리가 있어.
     7.25s  agent 발화 끝
     7.78s  user  발화 시작: 오후 2시 괜찮은데. 예약해 줄래?
     9.52s  <ret> 발화 (turn3 첫 프레임)
     9.52s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.53s]: (tool result) Booking confirmed. Sunset Ridge Estates, May first, 2:00
    10.04s  user  발화 끝
    10.11s  agent 발화 시작: <ret> 당연하지. 5월 1일 오후 2시로 선셋 리지 에스테이트 방문 예약 됐어. 확인 번호는 GH789야
    17.57s  agent 발화 끝
    18.33s  user  발화 시작: 좋네. 있잖아, 그 에스테이트를 설계한 건축가에 대해 아는 거 있어?
    22.25s  agent 발화 시작: 그건 좋은 질문인데. 그 에스테이트는 현지 건축가인 아서 블랙우드가 설계했어.
    22.36s  user  발화 끝
    27.29s  agent 발화 끝
    27.42s  user  발화 시작: 흥미롭네. 그러니까, 다른 유명한 작품도 있어?
    30.52s  <ret> 발화 (turn7 첫 프레임)
    30.68s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.74s]: (tool result) Arthur Blackwood designed the Old Mill Library and St. J
    30.79s  user  발화 끝
    31.11s  agent 발화 시작: <ret> 있었지. 아서 블랙우드는 올드 밀 라이브러리랑 세인트 주드 교회도 설계했거든.
    36.90s  agent 발화 끝
    37.16s  user  발화 시작: 세인트 주드… 할머니가 그 교회에 대해 말씀하신 것 같은데. 무슨 양식이야?
    41.80s  <ret> 발화 (turn9 첫 프레임)
    42.39s  agent 발화 시작: <ret> 꽤 인상적이야. 세인트 주드 교회는 고딕 리바이벌 양식이고, 1938년에 완공됐어.
    42.48s  user  발화 끝
    42.68s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.86s]: (tool result) St. Jude’s Church is built in the Gothic Revival style, 
    48.30s  user  발화 시작: 고딕 리바이벌, 그렇지. [sigh] 용어가 자꾸 헷갈리네. 선셋 리지 에스테이트 근처에 괜찮은 식당 있어?
    48.60s  agent 발화 끝
    54.09s  <ret> 발화 (turn11 첫 프레임)
    54.68s  agent 발화 시작: <ret> 몇 군데 있는데. 골든 스푼이 에스테이트에서 1.2킬로미터 떨어져 있고, 평점은 4.5점이야.
    54.92s  user  발화 끝
    55.09s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.39s]: (tool result) The Golden Spoon is 1.2 kilometers from Sunset Ridge Est
    61.26s  agent 발화 끝
    61.45s  user  발화 시작: 괜찮아 보이는데. 무슨 음식을 파는 곳이야?
    63.99s  <ret> 발화 (turn13 첫 프레임)
    64.49s  user  발화 끝
    64.58s  agent 발화 시작: <ret> 메뉴가 다양해. 골든 스푼에서는 이탈리아 음식이랑 미국 음식을 팔아.
    64.99s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.21s]: (tool result) The Golden Spoon serves Italian and American cuisine.
    68.54s  user  발화 시작: 좋네. 그럼 5월 1일 날씨 예보는 어때?
    68.56s  agent 발화 끝
    71.02s  <ret> 발화 (turn15 첫 프레임)
    71.61s  agent 발화 시작: <ret> 잠깐만 확인해 볼게. 5월 1일은 18도이고 부분적으로 흐릴 거야.
    71.76s  user  발화 끝
    72.02s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.78s]: (tool result) May first will be 18 degrees Celsius, partly cloudy.
    75.69s  user  발화 시작: 알아두면 좋겠다. 난 석공인데— 옛날 건물 복원하는 일을 해.
    75.78s  agent 발화 끝
    80.53s  agent 발화 시작: 아, 같은 기술자구나. 인내심이랑 좋은 안목이 필요한 힘든 직업이지, 내 일이랑 비슷하거든.
    80.55s  user  발화 끝
    86.50s  agent 발화 끝
    86.87s  user  발화 시작: 그래, 그렇지. 요즘 성당 복원 작업을 하고 있어.
    90.10s  user  발화 끝
    90.31s  agent 발화 시작: 성당… 웅장한 구조물이지. 돌 하나하나에 담긴 역사의 무게. 그런 예술성을 보존하는 건 정말 흥미로운 도전이
    98.60s  agent 발화 끝
