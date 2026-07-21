# v3_card_49_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_49",
#     "name": "예람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "airline",
#       "text": "User usually flies with Lufthansa."
#     },
#     {
#       "date": "2026-06-08",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "medication",
#       "text": "User takes a vitamin D supplement."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "schedule",
#       "text": "User has a fully remote setup."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "emergency",
#       "text": "User's emergency contact is Clara."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "dish",
#       "text": "User's go-to comfort dish is beef tacos."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "learning",
#       "text": "User is studying for the CPA exam."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-04-17",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-02-24",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-01-18",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 머리 자르러 가는 약속 있거든. | S2 고마워. | S3 좋아, 그럼 감천문화마을로 가보자. | S4 그냥… 너무 갑자기 헤어졌어. 이유도 잘 모르겠고.

     0.00s  user  발화 시작: 오늘 머리 자르러 가는 약속 있거든.
     2.15s  agent 발화 시작: 네, 기억해 둘게요.
     2.24s  user  발화 끝
     3.52s  agent 발화 끝
     4.51s  user  발화 시작: 그건 그렇고, 밥 뉴하트 쇼에 조안나 역을 누가 맡았는지 기억나?
     9.08s  <ret> 발화 (turn3 첫 프레임)
     9.13s  agent 발화 시작: <ret> 밥 뉴하트 쇼의 조안나 역은 메리 프랜이 맡았어요. 총 백삼십구개 에피소드에 출연했대요.
     9.22s  user  발화 끝
     9.78s  ⚡SPAN 주입 [d'=0.70s / d_lead=6.34s]: Mary Frann played Joanna Loudon on the Bob Newhart Show from 1982 to 1
    15.46s  agent 발화 끝
    15.52s  user  발화 시작: 오, 그렇구나.
    16.38s  <ret> 발화 (turn5 첫 프레임)
    16.48s  user  발화 끝
    16.57s  agent 발화 시작: <ret> 부산에 분위기 좋은 카페가 몇 군데 있어요. 해운대에 있는 '카페 드림'은 평점이 사 점 오점이고
    17.68s  ⚡SPAN 주입 [d'=1.30s / d_lead=7.27s]: (tool result) {"restaurants": [{"name": "카페 드림", "address": "부산 해운대구 해
    22.15s  user  발화 시작: 어어.
    22.86s  user  발화 끝
    23.83s  agent 발화 끝
    23.90s  user  발화 시작: 카페 드림? 해운대에 있구나.
    26.07s  user  발화 끝
    26.27s  agent 발화 시작: 네, 해운대로 백이십삼번지에 있어요.
    28.75s  agent 발화 끝
    29.39s  user  발화 시작: 음, 부산역 근처에 맛집은 없을까?
    31.74s  <ret> 발화 (turn10 첫 프레임)
    32.00s  agent 발화 시작: <ret> 부산역 근처에는 '밀면 전문점'이 평점 사 점 삼점에 가격대는 저렴해요.
    32.15s  user  발화 끝
    32.57s  ⚡SPAN 주입 [d'=0.83s / d_lead=4.95s]: (tool result) {"restaurants": [{"name": "밀면 전문점", "address": "부산 동구 부산
    34.09s  user  발화 시작: 응.
    34.49s  user  발화 끝
    36.96s  agent 발화 끝
    37.06s  user  발화 시작: 밀면 전문점? 좋네.
    38.99s  agent 발화 시작: 네, 부산역광장 십번지에 있어요.
    39.02s  user  발화 끝
    41.48s  agent 발화 끝
    41.65s  user  발화 시작: 아, 그러고 보니 구월 이십삼일 약속 시간 맞춰서 알람 설정해 줄 수 있어?
    46.57s  <ret> 발화 (turn15 첫 프레임)
    46.64s  agent 발화 시작: <ret> 네, 이천이십육년 구월 이십삼일 오후 한시 사십오분에 알람을 설정했어요.
    46.73s  user  발화 끝
    47.49s  ⚡SPAN 주입 [d'=0.92s / d_lead=5.46s]: (tool result) Alarm set for September 23, 2026 at 1:45 PM.
    52.10s  agent 발화 끝
    53.78s  user  발화 시작: 고마워.
    54.51s  user  발화 끝
    54.95s  <ret> 발화 (turn17 첫 프레임)
    54.96s  agent 발화 시작: <ret> [happy] 별거 아니에요. 혹시 요즘 영화 볼만한 거 있어요?
    55.55s  ⚡SPAN 주입 [d'=0.60s / d_lead=3.46s]: (tool result) Currently showing movies: "인터스텔라" (Sci-Fi), "어벤져스: 엔드게임"
    58.42s  agent 발화 끝
    58.51s  agent 발화 시작: 요즘은 '인터스텔라', '어벤져스: 엔드게임', '기생충'이 상영 중이에요.
    63.09s  agent 발화 끝
    63.86s  user  발화 시작: '기생충'은 이미 봤어.
    65.75s  user  발화 끝
    65.89s  agent 발화 시작: 아, 그러셨군요. 그럼 '인터스텔라'나 '어벤져스: 엔드게임'은 어떠세요?
    67.50s  user  발화 시작: 어.
    67.97s  user  발화 끝
    70.47s  agent 발화 끝
    70.71s  user  발화 시작: 음… '인터스텔라'가 더 끌리네.
    72.97s  <ret> 발화 (turn23 첫 프레임)
    73.27s  user  발화 끝
    73.56s  agent 발화 시작: <ret> 네, 부산역 씨 지 브이에서 오늘 오후 두시, 다섯시 삼십분, 아홉시에 상영하고 있어요.
    74.57s  ⚡SPAN 주입 [d'=1.60s / d_lead=6.34s]: (tool result) "인터스텔라" is playing at CGV Busan Station at 2:00 PM, 5:30
    79.91s  agent 발화 끝
    80.53s  user  발화 시작: 오후 다섯시 삼십분으로 예매해 줄 수 있어?
    82.44s  <ret> 발화 (turn25 첫 프레임)
    82.87s  agent 발화 시작: <ret> 네, '인터스텔라' 오후 다섯시 삼십분 부산역 씨 지 브이 티켓 두 장을 예매했어요. 확인 번호는
    82.92s  user  발화 끝
    83.04s  ⚡SPAN 주입 [d'=0.60s / d_lead=11.03s]: (tool result) Two tickets for "인터스텔라" at CGV Busan Station at 5:30 PM 
    93.90s  agent 발화 끝
    94.05s  user  발화 시작: 와, 진짜 고마워.
    95.31s  <ret> 발화 (turn27 첫 프레임)
    95.43s  user  발화 끝
    95.88s  agent 발화 시작: <ret> [happy] 천만에요. 혹시 부산에서 데이트하기 좋은 장소도 알아볼까요?
    97.17s  ⚡SPAN 주입 [d'=1.86s / d_lead=4.30s]: (tool result) Popular romantic spots in Busan: Taejongdae Park, Gamche
   100.18s  agent 발화 끝
   100.34s  agent 발화 시작: 부산에서 데이트하기 좋은 곳으로는 태종대 공원, 감천문화마을, 해운대 해변이 유명해요.
   106.63s  agent 발화 끝
   106.93s  user  발화 시작: 해운대 해변은 너무 뻔하잖아.
   108.86s  user  발화 끝
   108.97s  agent 발화 시작: [curious] 그렇군요. 그럼 감천문화마을이나 태종대 공원은 어떠세요?
   113.06s  user  발화 시작: 감천문화마을은 사진 찍기 좋지 않아?
   113.40s  agent 발화 끝
   115.64s  agent 발화 시작: 네, 알록달록한 집들이 예뻐서 사진 찍기 정말 좋아요.
   115.76s  user  발화 끝
   119.62s  agent 발화 끝
   119.68s  user  발화 시작: 좋아, 그럼 감천문화마을로 가보자.
   122.47s  <ret> 발화 (turn34 첫 프레임)
   122.81s  agent 발화 시작: <ret> 부산역에서 지하철 일호선을 타고 토성역에서 내려서 육번 출구로 나오세요. 그리고 일 일번이나 일 
   122.81s  user  발화 끝
   123.50s  ⚡SPAN 주입 [d'=1.04s / d_lead=11.22s]: (tool result) Take subway line 1 from Busan Station to Toseong Station
   134.02s  agent 발화 끝
   134.07s  user  발화 시작: 오, 알았어.
   135.65s  agent 발화 시작: 혹시 오늘 저녁에 뭐 하실 계획 있으세요?
   135.66s  user  발화 끝
   138.03s  user  발화 시작: 글쎄, 아직 딱히.
   138.19s  agent 발화 끝
   139.61s  user  발화 끝
   139.84s  agent 발화 시작: [sigh] 요즘 힘든 일 있으세요?
   142.84s  agent 발화 끝
   142.97s  user  발화 시작: 그냥 좀 답답해.
   144.27s  user  발화 끝
   144.51s  agent 발화 시작: [curious] 어떤 점이 답답하신가요?
   146.21s  agent 발화 끝
   147.59s  user  발화 시작: 그냥… 헤어진 지 얼마 안 돼서 그런가 봐.
   148.97s  agent 발화 시작: 네.
   149.74s  agent 발화 끝
   150.08s  agent 발화 시작: 아… 힘드시겠어요. 헤어짐은 누구에게나 어려운 일이죠.
   150.12s  user  발화 끝
   154.19s  agent 발화 끝
   154.35s  user  발화 시작: 응…
   154.79s  user  발화 끝
   154.92s  agent 발화 시작: 괜찮으시다면, 그분에 대한 이야기를 조금 해 주실 수 있을까요?
   158.01s  user  발화 시작: 응.
   158.36s  user  발화 끝
   159.18s  agent 발화 끝
   159.38s  user  발화 시작: 음… (잠시 침묵)
   160.24s  user  발화 끝
   160.71s  agent 발화 시작: [happy] 천천히 말씀하셔도 괜찮아요. 제가 옆에서 들어드릴게요.
   162.92s  user  발화 시작: 어.
   163.37s  user  발화 끝
   164.63s  agent 발화 끝
   164.75s  user  발화 시작: 그냥… 너무 갑자기 헤어졌어. 이유도 잘 모르겠고.
   169.42s  agent 발화 시작: 갑작스러운 이별은 정말 혼란스러울 수 있어요. 이유를 모르는 건 더 힘들고요.
   169.45s  user  발화 끝
   174.65s  agent 발화 끝
   174.94s  user  발화 시작: 응… 어떻게 해야 할지 모르겠어.
   177.00s  agent 발화 시작: [curious] 지금 가장 하고 싶은 건 뭐예요?
   177.12s  user  발화 끝
   178.93s  agent 발화 끝
   180.10s  user  발화 시작: 그냥… 혼자 있고 싶어.
   182.15s  user  발화 끝
   182.15s  agent 발화 시작: 혼자만의 시간을 갖는 것도 좋은 방법이에요. 자신을 돌보는 데 집중하세요.
   186.92s  agent 발화 끝
   187.68s  user  발화 시작: 그래야겠지.
   188.68s  agent 발화 시작: 구월 이십삼일 머리 자르러 가는 약속 시간이 어떻게 되나요?
   188.69s  user  발화 끝
   192.00s  🃏 CARD 주입 (2400f, 누적 58턴 요약, 124f): haircut date: 구월 이십삼일; haircut time: 오후 한시 사십오분; movie time: 오후 다섯시 삼십분; movie location: 부
   192.42s  agent 발화 끝
   192.52s  <ret> 발화 (turn58 첫 프레임)
   192.60s  agent 발화 시작: <ret> 오후 한시 사십오분이에요.
   193.53s  ⚡SPAN 주입 [d'=1.01s / d_lead=2.07s]: [2026-07-10] 오후 1시 45분.
   194.67s  agent 발화 끝
   195.87s  user  발화 시작: 아, 맞아.
   196.95s  user  발화 끝
   196.96s  agent 발화 시작: 그리고 머리 자르는 비용은 얼마였죠?
   198.87s  <ret> 발화 (turn61 첫 프레임)
   198.99s  agent 발화 끝
   199.03s  agent 발화 시작: <ret> 이십만원이었어요.
   199.62s  ⚡SPAN 주입 [d'=0.75s / d_lead=1.42s]: [2026-07-10] 200,000원.
   200.45s  agent 발화 끝
   201.55s  user  발화 시작: 아, 그래.
   202.43s  agent 발화 시작: [happy] 괜찮으시다면, 잠시 긍정적인 생각을 해보는 건 어떠세요?
   202.43s  user  발화 끝
   203.65s  user  발화 시작: 맞아.
   204.26s  user  발화 끝
   206.22s  agent 발화 끝
   207.33s  user  발화 시작: 그래야겠지.
   208.19s  agent 발화 시작: [happy] 힘든 시간도 지나갈 거예요. 제가 항상 곁에서 응원할게요.
   208.29s  user  발화 끝
   211.97s  agent 발화 끝
