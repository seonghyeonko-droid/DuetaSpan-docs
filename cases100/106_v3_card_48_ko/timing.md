# v3_card_48_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_48",
#     "name": "하람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "car",
#       "text": "User drives a 2021 Tesla Model 3."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "floor",
#       "text": "User lives on the 2nd floor."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "hobby",
#       "text": "User is into film photography."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "employer",
#       "text": "User works at a research institute."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-04",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-04-02",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-01-16",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 구월 십일일에 비행기 예약했어요. | S2 아, 맞다. 그 드라마 진짜 재밌게 봤는데. | S3 휴식을 취하고 싶은데, 뭘 해야 할지… | S4 요즘 너무 바빠서 정신이 없네요.

     0.00s  user  발화 시작: 구월 십일일에 비행기 예약했어요.
     2.60s  agent 발화 시작: 네, 알겠습니다. 즐거운 여행 되세요.
     2.63s  user  발화 끝
     5.56s  agent 발화 끝
     5.80s  user  발화 시작: 오후 두시에 출발하는 걸로 했고요.
     7.93s  agent 발화 시작: 오후 두시군요. 확인했습니다.
     8.10s  user  발화 끝
    10.61s  user  발화 시작: 사만 오천원이었던 것 같아요.
    10.88s  agent 발화 끝
    12.59s  user  발화 끝
    12.63s  agent 발화 시작: 네, 사만 오천원 맞습니다.
    14.91s  user  발화 시작: 아, 요즘 좀 스트레스가 많네요. 이직 준비를 하고 있는데, 면접 볼 때마다 떨어져서요.
    14.99s  agent 발화 끝
    20.69s  user  발화 끝
    20.84s  agent 발화 시작: 이직 준비, 쉽지 않죠. 면접에서 계속 떨어지시면 많이 힘드실 텐데요.
    22.41s  user  발화 시작: 음.
    22.86s  user  발화 끝
    26.16s  user  발화 시작: 네, 자신감도 떨어지고 뭘 잘못하는 건지 모르겠어요.
    26.16s  agent 발화 끝
    29.15s  agent 발화 시작: [sigh] 자신감이 떨어지는 건 당연해요. 하지만 포기하지 마세요.
    29.38s  user  발화 끝
    31.32s  user  발화 시작: 음.
    31.82s  user  발화 끝
    33.54s  agent 발화 끝
    34.60s  user  발화 시작: 혹시 면접에서 자주 나오는 질문 같은 거 있을까요?
    38.01s  <ret> 발화 (turn13 첫 프레임)
    38.04s  agent 발화 시작: <ret> 면접에서 가장 흔하게 나오는 질문은 "자기소개를 해 주세요"입니다.
    38.15s  user  발화 끝
    39.14s  ⚡SPAN 주입 [d'=1.13s / d_lead=4.31s]: The most common interview question is, “Tell me about yourself.”
    42.35s  agent 발화 끝
    42.39s  user  발화 시작: 아, 그 질문은 항상 어려워요. 뭘 어떻게 말해야 할지…
    46.30s  agent 발화 시작: 핵심은 간결하고 명확하게, 그리고 직무와 관련된 경험을 중심으로 이야기하는 거예요.
    46.46s  user  발화 끝
    49.38s  user  발화 시작: 그렇죠.
    50.10s  user  발화 끝
    51.67s  agent 발화 끝
    52.38s  user  발화 시작: 음… 어떤 경험을 중심으로 해야 할까요?
    54.96s  user  발화 끝
    55.14s  agent 발화 시작: 지원하는 직무에서 요구하는 역량과 관련된 경험을 중심으로 설명하시면 됩니다.
    59.92s  user  발화 시작: 저는 디자인 쪽으로 이직하려고 하는데, 포트폴리오가 부족한 것 같아요.
    60.00s  agent 발화 끝
    64.35s  agent 발화 시작: 디자인 쪽으로 이직하시는군요. 포트폴리오가 부족하다면, 개인 프로젝트를 통해 실력을 쌓는 것도 좋은 방법입니
    64.36s  user  발화 끝
    71.49s  agent 발화 끝
    72.05s  user  발화 시작: 개인 프로젝트요? 어떤 걸 해야 할까요?
    75.09s  agent 발화 시작: 디자인 관련 공모전에 참여하거나, 웹사이트나 앱 디자인을 직접 해보는 것도 좋습니다.
    75.10s  user  발화 끝
    80.13s  user  발화 시작: 좋은 아이디어네요. 한번 해볼게요.
    80.27s  agent 발화 끝
    82.43s  agent 발화 시작: [happy] 네, 꼭 도전해 보세요. 분명 좋은 결과가 있을 거예요.
    82.67s  user  발화 끝
    86.02s  user  발화 시작: 혹시… 마이클 스코필드가 소나에서 탈출한 게 언제였죠? 갑자기 궁금해졌어요.
    86.14s  agent 발화 끝
    91.34s  <ret> 발화 (turn26 첫 프레임)
    91.53s  agent 발화 시작: <ret> 마이클 스코필드가 소나에서 탈출한 건 프리즌 브레이크 마지막 에피소드, “Under and Out
    91.67s  user  발화 끝
    92.68s  ⚡SPAN 주입 [d'=1.34s / d_lead=6.11s]: Michael Scofield broke out of Sona in the series finale of Prison Brea
    94.68s  user  발화 시작: 네네.
    95.46s  user  발화 끝
    97.50s  user  발화 시작: 아, 맞다. 그 드라마 진짜 재밌게 봤는데.
    97.64s  agent 발화 끝
   100.12s  agent 발화 시작: 저도 그 드라마 좋아했어요. 긴장감이 넘치고 스토리가 흥미진진하죠.
   100.23s  user  발화 끝
   104.80s  agent 발화 끝
   104.85s  user  발화 시작: 그 드라마 보면서 탈출하는 장면이 너무 인상적이었어요.
   108.45s  user  발화 끝
   108.66s  agent 발화 시작: 네, 마이클 스코필드의 치밀한 계획과 실행력이 돋보이는 장면이었죠.
   112.39s  user  발화 시작: 맞아요.
   113.07s  user  발화 끝
   113.61s  agent 발화 끝
   114.54s  user  발화 시작: 요즘 날씨가 너무 덥네요.
   116.32s  <ret> 발화 (turn34 첫 프레임)
   116.39s  user  발화 끝
   116.42s  agent 발화 시작: <ret> 현재 부산 날씨는 기온 삼십삼도, 습도 육십팔퍼센트, 풍속 사 점 이킬로미터입니다.
   118.10s  ⚡SPAN 주입 [d'=1.78s / d_lead=6.06s]: (tool result) Current weather in Busan: 33.0°C, humidity 68%, wind 4.2
   119.21s  user  발화 시작: 네.
   119.70s  user  발화 끝
   122.49s  agent 발화 끝
   122.78s  user  발화 시작: 에어컨 없이는 도저히 살 수 없겠어요.
   125.04s  agent 발화 시작: [laugh] 맞아요. 에어컨 없이는 정말 덥죠.
   125.09s  user  발화 끝
   128.14s  agent 발화 끝
   128.24s  user  발화 시작: 부산에서 시원한 카페 추천해 줄 만한 곳 있을까요?
   130.63s  <ret> 발화 (turn39 첫 프레임)
   131.18s  agent 발화 시작: <ret> 부산에서 시원한 카페를 찾으신다면, 카페 연제가 유명합니다. 분위기도 좋고 음료도 맛있다고 해요.
   131.38s  user  발화 끝
   132.02s  ⚡SPAN 주입 [d'=1.39s / d_lead=6.39s]: Cafe Yeonje is a popular cafe in Busan known for its cool atmosphere a
   134.75s  user  발화 시작: 네.
   135.33s  user  발화 끝
   137.52s  user  발화 시작: 카페 연제… 한번 가봐야겠네요.
   137.57s  agent 발화 끝
   139.90s  agent 발화 시작: 네, 꼭 한번 가보세요. 시원하게 더위를 식힐 수 있을 거예요.
   140.01s  user  발화 끝
   141.68s  user  발화 시작: 네.
   142.49s  user  발화 끝
   145.09s  agent 발화 끝
   145.11s  user  발화 시작: 디자인 관련 책 추천해 줄 만한 거 있을까요?
   147.16s  <ret> 발화 (turn45 첫 프레임)
   147.69s  user  발화 끝
   147.71s  agent 발화 시작: <ret> 디자인 관련 책으로는 돈 노먼의 “The Design of Everyday Things”가 유명합
   148.03s  ⚡SPAN 주입 [d'=0.87s / d_lead=8.39s]: "The Design of Everyday Things" by Don Norman is a classic book on use
   156.10s  agent 발화 끝
   156.73s  user  발화 시작: 음… 사용자 경험 디자인이라. 한번 찾아봐야겠네요.
   160.46s  agent 발화 시작: 네, 한번 읽어보세요. 디자인에 대한 새로운 시각을 얻을 수 있을 거예요.
   160.56s  user  발화 끝
   163.55s  user  발화 시작: 음.
   164.00s  user  발화 끝
   165.18s  user  발화 시작: 혹시 부산에서 이력서 첨삭해 주는 곳 있을까요?
   165.18s  agent 발화 끝
   167.86s  <ret> 발화 (turn50 첫 프레임)
   167.97s  agent 발화 시작: <ret> 부산에는 부산 취업지원센터에서 이력서 첨삭 서비스를 제공하고 있습니다.
   168.13s  user  발화 끝
   168.76s  ⚡SPAN 주입 [d'=0.90s / d_lead=4.86s]: Busan Career Center offers resume review services to job seekers.
   172.83s  agent 발화 끝
   172.93s  user  발화 시작: 아, 취업지원센터군요. 한번 알아봐야겠어요.
   176.09s  agent 발화 시작: 네, 꼭 한번 이용해 보세요. 이력서 작성에 도움이 될 거예요.
   176.16s  user  발화 끝
   178.50s  user  발화 시작: 네.
   178.99s  user  발화 끝
   180.25s  agent 발화 끝
   180.70s  user  발화 시작: 요즘 너무 지쳐서 뭘 해야 할지 모르겠어요.
   183.78s  agent 발화 시작: [sigh] 힘드시겠네요. 잠시 휴식을 취하는 것도 좋은 방법입니다.
   183.93s  user  발화 끝
   188.53s  user  발화 시작: 휴식을 취하고 싶은데, 뭘 해야 할지…
   188.69s  agent 발화 끝
   191.25s  agent 발화 시작: 좋아하는 음악을 듣거나, 영화를 보거나, 산책을 하는 것도 좋습니다.
   191.48s  user  발화 끝
   192.00s  🃏 CARD 주입 (2400f, 누적 58턴 요약, 125f): date: 구월 십일일; time: 오후 두시; price: 사만 오천원; job goal: 디자인 쪽으로 이직; resume help: 부산 취업지원센터
   193.43s  user  발화 시작: 네.
   194.06s  user  발화 끝
   196.11s  agent 발화 끝
   196.51s  user  발화 시작: 산책은 좋은 생각이에요. 해운대 바닷가에 갈까 생각 중이에요.
   200.84s  agent 발화 시작: 해운대 바닷가는 시원한 바람도 불고 경치도 좋아서 산책하기에 아주 좋습니다.
   200.91s  user  발화 끝
   206.63s  agent 발화 끝
   207.33s  user  발화 시작: 네, 꼭 한번 가봐야겠어요.
   209.40s  agent 발화 시작: [happy] 네, 즐거운 시간 보내세요.
   209.59s  user  발화 끝
   211.13s  user  발화 시작: 아, 제가 얼마 전에 친구 생일 선물로 뭘 줬는지 기억이 안 나네요.
   211.25s  agent 발화 끝
   214.34s  <ret> 발화 (turn64 첫 프레임)
   214.93s  agent 발화 시작: <ret> 친구 생일 선물요? 잠깐만 기억을 되짚어 볼게요.
   215.06s  user  발화 끝
   215.91s  ⚡SPAN 주입 [d'=1.57s / d_lead=3.38s]: [2026-07-08] I gave Jimin a book for his birthday.
   218.16s  agent 발화 시작: 칠월 팔일에 지민이 생일 선물로 책을 줬다고 하셨네요.
   218.30s  agent 발화 끝
   221.72s  agent 발화 끝
   222.24s  user  발화 시작: 아, 맞다. 책을 줬었지.
   224.13s  user  발화 끝
   224.52s  agent 발화 시작: 네, 기억하셨군요. 다행입니다.
   227.38s  agent 발화 끝
   229.04s  user  발화 시작: 이직 준비하면서 영어 공부도 다시 시작해야 할 것 같아요.
   233.15s  user  발화 끝
   233.24s  agent 발화 시작: 영어 공부는 이직 준비에 큰 도움이 될 거예요.
   236.06s  agent 발화 끝
   236.48s  user  발화 시작: 영어 공부는 어떻게 해야 할까요?
   238.64s  agent 발화 시작: 온라인 강의를 듣거나, 영어 회화 스터디에 참여하는 것도 좋은 방법입니다.
   238.74s  user  발화 끝
   243.41s  agent 발화 끝
   243.66s  user  발화 시작: 온라인 강의는 어떤 게 좋을까요?
   245.78s  user  발화 끝
   245.81s  agent 발화 시작: Duolingo나 Babbel 같은 앱을 이용하면 편리하게 영어 공부를 할 수 있습니다.
   250.26s  agent 발화 끝
   250.45s  user  발화 시작: 한번 알아봐야겠어요.
   251.79s  agent 발화 시작: [happy] 네, 꼭 한번 알아보세요.
   251.83s  user  발화 끝
   253.69s  agent 발화 끝
   253.75s  user  발화 시작: 아, 제가 구월 십일일에 예약한 비행기 시간이 몇 시였죠?
   257.87s  agent 발화 시작: 오후 두시였어요.
   258.00s  user  발화 끝
   259.25s  agent 발화 끝
   259.36s  user  발화 시작: 아, 맞다. 오후 두시였지.
   261.77s  agent 발화 시작: 네, 기억하셨군요.
   261.80s  user  발화 끝
   263.34s  agent 발화 끝
   263.39s  user  발화 시작: 요즘 너무 바빠서 정신이 없네요.
   265.56s  agent 발화 시작: [sigh] 바쁘신 와중에 이직 준비까지 하시는군요. 정말 대단하세요.
   265.79s  user  발화 끝
   271.68s  agent 발화 끝
   272.77s  user  발화 시작: 그래도 꿈을 위해 노력해야겠죠.
   274.70s  user  발화 끝
   274.74s  agent 발화 시작: 네, 꿈을 향해 노력하는 모습이 보기 좋습니다.
   278.51s  user  발화 시작: 혹시 부산에서 분위기 좋은 레스토랑 추천해 줄 만한 곳 있을까요?
   278.62s  agent 발화 끝
   282.89s  <ret> 발화 (turn85 첫 프레임)
   283.04s  user  발화 끝
   283.17s  agent 발화 시작: <ret> 부산에는 라 보엠이라는 프랑스 레스토랑이 분위기가 좋다고 합니다.
   283.94s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.65s]: La Boheme in Busan is a French restaurant known for its romantic atmos
   286.66s  user  발화 시작: 라 보엠… 한번 가봐야겠네요.
   286.82s  agent 발화 끝
   289.11s  user  발화 끝
   289.17s  agent 발화 시작: 네, 데이트 장소로도 좋을 거예요.
   291.71s  agent 발화 끝
   292.60s  user  발화 시작: 요즘 스트레스 해소할 방법이 없을까요?
   295.01s  agent 발화 시작: 스트레스 해소에는 운동이나 취미 활동이 도움이 됩니다.
   295.19s  user  발화 끝
   297.09s  user  발화 시작: 그렇죠.
   297.59s  user  발화 끝
   298.49s  agent 발화 끝
   298.49s  user  발화 시작: 운동은 귀찮은데…
   299.99s  agent 발화 시작: [laugh] 운동이 귀찮으시다면, 영화를 보거나 음악을 듣는 것도 좋은 방법입니다.
   300.10s  user  발화 끝
   302.00s  user  발화 시작: 네.
   302.77s  user  발화 끝
   304.52s  agent 발화 끝
   304.85s  user  발화 시작: 영화는 좋은 생각이에요.
   306.45s  agent 발화 시작: 네, 좋아하는 영화를 보면서 스트레스를 해소해 보세요.
   306.50s  user  발화 끝
   308.30s  user  발화 시작: 맞아요.
   309.03s  user  발화 끝
   309.78s  agent 발화 끝
   310.21s  user  발화 시작: 아, 제가 얼마 전에 비행기 티켓을 얼마에 샀었죠?
   313.43s  user  발화 끝
   313.73s  agent 발화 시작: 사만 오천원이었습니다.
   315.68s  user  발화 시작: 아, 맞다. 사만 오천원이었지.
   315.71s  agent 발화 끝
   317.57s  agent 발화 시작: 네, 기억하셨군요.
   317.79s  user  발화 끝
   319.04s  agent 발화 끝
   319.62s  user  발화 시작: 이제 슬슬 마무리해야 할 것 같아요.
   322.34s  user  발화 끝
   322.36s  agent 발화 시작: 네, 오늘 대화가 도움이 되셨기를 바랍니다.
   325.40s  user  발화 시작: 네, 덕분에 많은 도움이 됐어요. 감사합니다.
   325.56s  agent 발화 끝
   328.63s  user  발화 끝
   328.73s  agent 발화 시작: [happy] 천만에요.
   329.83s  agent 발화 끝
