# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "연안",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이천사년에 찰리가 올랜도를 강타했을 때, 그 폭풍은 무슨 등급 | S2 잠깐만, 김치냉장고 전원 빼는… | S3 …법 좀 알려줘 봐. | S4 아, 그러고 보니 그 폭풍 피해가 엄청났었죠.

     0.00s  user  발화 시작: 이천사년에 찰리가 올랜도를 강타했을 때, 그 폭풍은 무슨 등급이었죠?
     4.54s  <ret> 발화 (turn1 첫 프레임)
     4.78s  agent 발화 시작: <ret> 찰리가 플로리다에 상륙했을 때, 그 폭풍은 사등급 허리케인이었습니다.
     4.78s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.25s]: Charley was a Category 4 hurricane when it hit Florida in 2004.
     4.78s  user  발화 끝
     9.02s  user  발화 시작: 잠깐만, 김치냉장고 전원 빼는…
     9.02s  agent 발화 끝
    11.15s  user  발화 시작: …법 좀 알려줘 봐.
    11.15s  user  발화 끝
    13.27s  user  발화 시작: 아, 그러고 보니 그 폭풍 피해가 엄청났었죠.
    13.27s  user  발화 끝
    16.98s  agent 발화 시작: 맞아요, 큰 피해가 있었죠. 혹시 올랜도에 계신 분이 계신가요?
    16.98s  user  발화 끝
    21.76s  agent 발화 끝
