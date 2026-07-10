# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "준린",
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
#       "date": "2026-06-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-29",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 캐나다 실드 지형이 언제 형성되었는지 궁금해요. | S2 원생누대… 그게 언제쯤이었죠? | S3 그 시대에 다른 중요한 사건은… | S4 …없었나요? … 혹시 생명체도 있었을까요?

     0.00s  user  발화 시작: 캐나다 실드 지형이 언제 형성되었는지 궁금해요.
     2.72s  <ret> 발화 (turn1 첫 프레임)
     3.11s  agent 발화 시작: <ret> 캐나다 실드 지형은 아주 오래전인 원생누대 동안 형성되었답니다.
     3.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.01s]: The Canadian Shield was formed during the Proterozoic Eon.
     3.23s  user  발화 끝
     8.09s  user  발화 시작: 원생누대… 그게 언제쯤이었죠?
     8.11s  agent 발화 끝
     9.86s  <ret> 발화 (turn3 첫 프레임)
    10.18s  agent 발화 시작: <ret> 원생누대는 약 이십오억 년 전부터 오억 사천 일백만 년 전까지의 시기를 아우르는 아주 긴 기간이에
    10.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: The Proterozoic Eon spans from 2.5 billion to 541 million years ago.
    10.40s  user  발화 끝
    14.37s  user  발화 시작: 진짜요?
    15.00s  user  발화 끝
    17.78s  agent 발화 끝
    17.81s  agent 발화 시작: 오랜 시간 동안 자연이 만들어낸 웅장한 지형이죠.
    19.60s  user  발화 시작: 네.
    19.95s  user  발화 끝
    21.42s  agent 발화 끝
    22.15s  user  발화 시작: 그 시대에 다른 중요한 사건은…
    24.40s  user  발화 끝
    26.15s  user  발화 시작: …없었나요? … 혹시 생명체도 있었을까요?
    28.56s  <ret> 발화 (turn9 첫 프레임)
    28.64s  agent 발화 시작: <ret> 원생누대에는 최초의 생명체 흔적이 나타나기 시작했답니다.
    28.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.44s]: The first evidence of life appears in the Proterozoic Eon.
    28.83s  user  발화 끝
    33.03s  agent 발화 시작: 그 시기는 지구 환경이 크게 변화하던 때이기도 해요.
    33.08s  agent 발화 끝
    36.78s  agent 발화 끝
