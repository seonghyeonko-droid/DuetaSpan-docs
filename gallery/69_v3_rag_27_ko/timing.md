# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "도안",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 버들레야랑 버차르디아 중에 약용 식물로 쓰이는 게 어느 건가요 | S2 버차르디아에 대해 좀 더 자세히 알려주시겠어요? 독일 식물학자 | S3 … 그 식물학자는 누구였죠? | S4 아, 요한 부르하르트였군요. 감사합니다.

     0.00s  user  발화 시작: 버들레야랑 버차르디아 중에 약용 식물로 쓰이는 게 어느 건가요?
     4.28s  <ret> 발화 (turn1 첫 프레임)
     4.35s  agent 발화 시작: <ret> 약용 식물에 대한 질문이시군요.
     4.36s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: Burchardia is a genus of perennial herbaceous plants native to Austral
     4.56s  user  발화 끝
     6.40s  agent 발화 시작: 버차르디아는 호주 원산의 여러해살이풀 속으로, 일부 종은 전통적으로 원주민 의학에서 사용되어 왔습니다.
     6.42s  agent 발화 끝
     8.81s  user  발화 시작: 맞아.
     9.36s  user  발화 끝
    13.44s  agent 발화 끝
    14.09s  user  발화 시작: 아, 그렇군요.
    15.69s  user  발화 끝
    15.85s  agent 발화 시작: 혹시 다른 식물에 대해서도 궁금하신 점이 있으신가요?
    17.17s  user  발화 시작: 음.
    17.57s  user  발화 끝
    19.00s  agent 발화 끝
    19.20s  user  발화 시작: 버차르디아에 대해 좀 더 자세히 알려주시겠어요? 독일 식물학자 이름을 땄다고 들었는데—
    25.63s  user  발화 시작: … 그 식물학자는 누구였죠?
    25.82s  user  발화 끝
    27.20s  <ret> 발화 (turn9 첫 프레임)
    27.27s  agent 발화 시작: <ret> 요한 부르하르트라는 의사이자 식물학자가 호주에서 식물을 수집한 초기 십구세기에, 독일 식물학자 칼
    27.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.27s]: Karl Lehmann, a German botanist, first described the genus Burchardia 
    27.48s  user  발화 끝
    32.07s  user  발화 시작: 어.
    32.56s  user  발화 끝
    40.54s  agent 발화 끝
    41.03s  user  발화 시작: 아, 요한 부르하르트였군요. 감사합니다.
    44.21s  user  발화 끝
    44.27s  agent 발화 시작: 도움이 되셨다니 기쁩니다.
    45.87s  agent 발화 끝
