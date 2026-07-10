# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "세정",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-25",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2025-11-23",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-11-08",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-10-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 영화 '콜 미 쿠추'랑… | S2 …'댓츠 댄싱!'이 같은 장르에 속하는지 궁금해요. | S3 아, 그렇군요. 그럼 혹시 지금 서울 날씨는 어떤가요? | S4 이십육 점 오도요… 좀 더 시원했으면 좋겠네요.

     0.00s  user  발화 시작: 혹시 영화 '콜 미 쿠추'랑…
     2.77s  user  발화 끝
     4.01s  user  발화 시작: …'댓츠 댄싱!'이 같은 장르에 속하는지 궁금해요.
     7.21s  <ret> 발화 (turn2 첫 프레임)
     7.28s  agent 발화 시작: <ret> '콜 미 쿠추'랑 '댓츠 댄싱!' 둘 다 다큐멘터리 영화로 분류되어 있어요. 실생활의 사건과 관점
     7.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: Both Call Me Kuchu and That's Dancing! are categorized as documentary 
     7.39s  user  발화 끝
    11.94s  user  발화 시작: 네.
    12.34s  user  발화 끝
    13.98s  agent 발화 시작: 다큐멘터리는 현실을 반영하는 데 집중하는 장르라서, 다양한 이야기를 담을 수 있어요.
    14.13s  agent 발화 끝
    19.25s  agent 발화 끝
    20.00s  user  발화 시작: 아, 그렇군요. 그럼 혹시 지금 서울 날씨는 어떤가요?
    24.55s  <ret> 발화 (turn6 첫 프레임)
    24.62s  agent 발화 시작: <ret> 지금 서울 날씨는 이십육 점 오도이고, 습도는 육십팔%, 바람은 시속 사 점 이킬로미터로 불고 있
    24.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.32s]: (tool result) The current weather in Seoul is 26.5°C, humidity 68%, wi
    24.76s  user  발화 끝
    29.85s  user  발화 시작: 네.
    30.30s  user  발화 끝
    33.71s  user  발화 시작: 이십육 점 오도요… 좀 더 시원했으면 좋겠네요.
    33.94s  agent 발화 끝
    37.55s  agent 발화 시작: 날씨가 더워서 조금 불편하시겠어요. 시원한 물 많이 드시고, 햇볕을 피하시는 게 좋겠어요.
    37.59s  user  발화 끝
    43.67s  agent 발화 끝
