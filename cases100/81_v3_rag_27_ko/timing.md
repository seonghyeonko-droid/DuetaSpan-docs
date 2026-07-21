# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "우준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "emergency",
#       "text": "User's emergency contact is Ava."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "dish",
#       "text": "User's go-to comfort dish is shakshuka."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "partner",
#       "text": "User's partner is named Hana."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-28",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2026-05-04",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 지온 씨. 휴가 계획을… | S2 네, 그렇게 해주세요. 너무 멀리 떨어진 곳은 힘들 것 같아요 | S3 팔만 원이면 괜찮네요. 다른 곳도 좀 더 찾아봐 주시겠어요? | S4 경포호 근처에 조용한 오두막이 있을까요?

     0.00s  user  발화 시작: 안녕하세요, 지온 씨. 휴가 계획을…
     2.72s  user  발화 끝
     4.13s  user  발화 시작: …좀 짜고 싶은데 도와주실 수 있나요?
     7.21s  agent 발화 시작: [happy] 네, 물론이죠! 휴가 계획은 언제나 즐거운 일이죠. 어디로 떠나고 싶으신가요?
     7.22s  user  발화 끝
     8.91s  user  발화 시작: 네.
     9.54s  user  발화 끝
    12.95s  agent 발화 끝
    13.34s  user  발화 시작: 아직 딱 정해진 곳은 없어요. 그냥 조용하고 편안하게 쉴 수 있는 곳이면 좋겠어요.
    19.38s  agent 발화 시작: 조용하고 편안한 휴식이라… 좋은 선택이에요. 혹시 바다 근처를 선호하시나요? 아니면 산속 오두막도 괜찮으실까
    19.40s  user  발화 끝
    27.63s  agent 발화 끝
    29.40s  user  발화 시작: 음… 바다는 좀 붐빌 것 같아서 산속 오두막 쪽이 더 끌리네요.
    31.84s  agent 발화 시작: 맞아요.
    32.75s  agent 발화 끝
    34.16s  user  발화 끝
    34.58s  agent 발화 시작: 산속 오두막이라… 아주 좋은 생각이에요. 그럼 국내에 있는 조용한 산림 지역을 몇 군데 알아볼까요?
    41.66s  agent 발화 끝
    41.85s  user  발화 시작: 네, 그렇게 해주세요. 너무 멀리 떨어진 곳은 힘들 것 같아요.
    44.75s  agent 발화 시작: 네네.
    45.52s  agent 발화 끝
    46.44s  <ret> 발화 (turn11 첫 프레임)
    46.70s  user  발화 끝
    46.71s  agent 발화 시작: <ret> 평창은 이천십팔년 동계 올림픽 개최지로, 산악 지형과 스키 리조트로 유명해서 도시 생활에서 벗어나
    47.26s  ⚡SPAN 주입 [d'=0.82s / d_lead=9.78s]: The town of Pyeongchang in South Korea hosted the 2018 Winter Olympics
    56.49s  agent 발화 끝
    56.54s  user  발화 시작: 평창이요? 거긴 겨울에만 좋은 곳 아닌가요?
    60.05s  user  발화 끝
    60.13s  agent 발화 시작: 평창은 여름에도 아름다운 자연을 즐길 수 있어요. 울창한 숲길을 따라 하이킹을 하거나, 시원한 계곡에서 휴식
    69.45s  agent 발화 끝
    70.55s  user  발화 시작: 오, 여름에도 좋군요. 그럼 평창에 있는 오두막을 좀 찾아봐 주시겠어요?
    75.81s  <ret> 발화 (turn15 첫 프레임)
    76.30s  agent 발화 시작: <ret> 평창에서 산천산장이라는 오두막을 찾았습니다. 주소는 강원도 평창군 진부면 산천리 삼백사십오번지이고
    76.33s  user  발화 끝
    77.19s  ⚡SPAN 주입 [d'=1.38s / d_lead=11.82s]: (tool result) {"houses": [{"name": "Sancheon Mountain Cottage", "addre
    88.13s  agent 발화 끝
    88.40s  user  발화 시작: 팔만 원이면 괜찮네요. 다른 곳도 좀 더 찾아봐 주시겠어요?
    92.82s  <ret> 발화 (turn17 첫 프레임)
    92.86s  agent 발화 시작: <ret> 잠시만 기다려 주세요.
    92.94s  user  발화 끝
    94.29s  ⚡SPAN 주입 [d'=1.47s / d_lead=1.70s]: Woljeongsa Temple Stay in Pyeongchang offers traditional Korean lodgin
    94.56s  agent 발화 끝
    94.58s  agent 발화 시작: 평창의 월정사 템플스테이도 있어요. 역사적인 불교 사찰 안에서 한국 전통 숙박을 체험하며 고즈넉하고 문화적인
    98.36s  user  발화 시작: 네.
    98.95s  user  발화 끝
   104.63s  agent 발화 끝
   104.66s  agent 발화 시작: 월정사 템플스테이는 독특한 경험을 선호하시는 분들에게 추천해요. 조용히 명상도 하고, 사찰 음식을 맛볼 수도
   112.51s  user  발화 시작: …템플스테이는 좀 색다른 경험이네요. 그런데 평창 말고 다른 지역도 좀 알아봐 주실 수 있나요?
   113.14s  agent 발화 끝
   119.17s  agent 발화 시작: [curious] 네, 물론입니다. 평창 외에 다른 지역도 알아볼까요? 혹시 특별히 선호하는 지역이 있으신가
   119.18s  user  발화 끝
   123.02s  user  발화 시작: 음.
   123.69s  user  발화 끝
   125.89s  agent 발화 끝
   126.47s  user  발화 시작: 음… 강원도 쪽은 괜찮은데, 너무 깊숙한 곳은 좀 힘들 것 같아요.
   131.88s  user  발화 끝
   132.13s  agent 발화 시작: 강원도인데 너무 깊숙한 곳은 피하고 싶으시군요. 그럼 속초나 강릉 쪽은 어떠세요? 바다와 산이 가까워서 휴식
   138.74s  user  발화 시작: 아.
   139.32s  user  발화 끝
   141.41s  agent 발화 끝
   141.45s  user  발화 시작: 속초는 너무 붐빌 것 같고, 강릉 쪽이 괜찮겠네요.
   143.28s  agent 발화 시작: 네.
   144.01s  agent 발화 끝
   144.91s  <ret> 발화 (turn29 첫 프레임)
   145.43s  agent 발화 시작: <ret> 강릉의 경포호는 아름다운 경치와 산책로로 유명한 담수호예요. 조용히 휴식을 취하기에 아주 좋은 분
   145.56s  user  발화 끝
   146.33s  ⚡SPAN 주입 [d'=1.43s / d_lead=7.92s]: Gyeongpo Lake in Gangneung, South Korea is a freshwater lake known for
   151.68s  user  발화 시작: 그렇죠.
   152.46s  user  발화 끝
   153.35s  agent 발화 끝
   155.76s  user  발화 시작: 경포호 근처에 조용한 오두막이 있을까요?
   158.90s  <ret> 발화 (turn32 첫 프레임)
   158.92s  agent 발화 시작: <ret> 경포호 근처에 경포호반 오두막이 있습니다. 주소는 강원도 강릉시 경포로 백이십삼번지이고, 가격은 
   158.95s  user  발화 끝
   160.51s  ⚡SPAN 주입 [d'=1.60s / d_lead=11.36s]: (tool result) {"houses": [{"name": "Gyeongpo Lakeside Cottage", "addre
   167.25s  user  발화 시작: 그렇죠.
   168.02s  user  발화 끝
   170.28s  agent 발화 끝
   170.81s  user  발화 시작: 구만 오천 원이네요. 평점이 좀 더 높네요.
   174.14s  user  발화 끝
   174.35s  agent 발화 시작: [happy] 네, 평점이 조금 더 높네요. 경포호반 오두막은 경포호의 아름다운 경치를 감상하며 조용히 휴식
   184.03s  agent 발화 끝
   184.09s  user  발화 시작: 그럼 경포호반 오두막으로 예약해 주세요. 다음 주 토요일에 이박으로요.
   189.48s  <ret> 발화 (turn37 첫 프레임)
   189.58s  agent 발화 시작: <ret> 경포호반 오두막, 강릉, 이천이십육년 칠월 십팔일, 이박 예약이 완료되었습니다. 예약 번호는 알 
   189.69s  user  발화 끝
   190.61s  ⚡SPAN 주입 [d'=1.13s / d_lead=11.50s]: (tool result) Gyeongpo Lakeside Cottage, Gangneung, 2026-07-18, 2 nigh
   201.08s  agent 발화 끝
