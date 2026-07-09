# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "David",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 맘마미아 영화에서 '나의 사랑 나의 생명'을 누가 썼는지 궁금 | S2 스웨덴분이셨군요. 혹시 다른 멤버분들도 스웨덴분이신가요? | S3 아, 그럼 스웨덴 음악이 정말 유명하겠네요? | S4 아바 노래 들으면서 스웨덴 여행 가고 싶어지네요.

     0.00s  user  발화 시작: 맘마미아 영화에서 '나의 사랑 나의 생명'을 누가 썼는지 궁금해요.
     4.41s  <ret> 발화 (turn1 첫 프레임)
     4.49s  user  발화 끝
     4.55s  agent 발화 시작: <ret> 아, 맘마미아 정말 좋아하는 영화시군요. 그 노래에 대한 질문이시죠?
     6.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: Björn Ulvaeus.
     9.13s  agent 발화 시작: 그 노래를 작곡한 분은… 비외른 울바에우스 씨입니다. 아바 그룹의 멤버이기도 하죠.
     9.27s  agent 발화 끝
    14.55s  user  발화 시작: 아, 아바! 그렇군요. 그럼 그분은 다른 유명한 노래도 많이 쓰셨겠네요?
    14.64s  agent 발화 끝
    19.77s  <ret> 발화 (turn4 첫 프레임)
    20.05s  user  발화 끝
    20.09s  agent 발화 시작: <ret> 물론이죠. 비외른 울바에우스 씨는 아바의 수많은 히트곡들을 만들었어요.
    21.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: Björn Ulvaeus was born on April 25, 1945, in Gothenburg, Sweden.
    25.24s  agent 발화 시작: 비외른 울바에우스 씨는… 천구백사십오년 사월 이십오일에 스웨덴 예테보리에서 태어났답니다.
    25.42s  agent 발화 끝
    29.02s  user  발화 시작: 음.
    29.51s  user  발화 끝
    31.74s  user  발화 시작: 스웨덴분이셨군요. 혹시 다른 멤버분들도 스웨덴분이신가요?
    31.95s  agent 발화 끝
    35.95s  <ret> 발화 (turn8 첫 프레임)
    35.95s  user  발화 끝
    36.03s  agent 발화 시작: <ret> 네, 아바 멤버 대부분이 스웨덴 출신이에요. 벤니 앤더슨 씨도 스웨덴분이세요.
    37.95s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.55s]: (tool result) AAPL stock quote is 170.34, up 0.5% today.
    38.33s  user  발화 시작: 네.
    38.82s  user  발화 끝
    41.45s  user  발화 시작: 아, 그럼 스웨덴 음악이 정말 유명하겠네요?
    41.58s  agent 발화 끝
    44.39s  agent 발화 시작: 스웨덴 음악은 세계적으로 큰 영향을 미치고 있어요. 아바뿐만 아니라 다른 훌륭한 뮤지션들도 많죠.
    44.51s  user  발화 끝
    46.83s  user  발화 시작: 네.
    47.46s  user  발화 끝
    51.48s  agent 발화 끝
    52.23s  user  발화 시작: 아바 노래 들으면서 스웨덴 여행 가고 싶어지네요.
    55.37s  agent 발화 시작: [happy] 스웨덴은 아름다운 나라예요. 아바의 노래를 들으며 여행을 계획해 보세요. 분명 멋진 경험이 될
    55.46s  user  발화 끝
    62.51s  agent 발화 끝
