# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "시호",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-16",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 시호님. 저는 여러분의 상담사, 리온이라고 합니다.
     4.35s  agent 발화 끝
     5.06s  user  발화 시작: 아, 네. 반가워요. 혹시 제가 예전에 말씀드렸던 거 기억하세요?
     9.21s  <ret> 발화 (turn2 첫 프레임)
     9.36s  agent 발화 시작: <ret> 네, 시호님. 치과 예약 건에 대해 말씀하셨었죠. 아침 시간대, 한 선생님을 선호하신다고요.
     9.37s  ⚡SPAN 주입 [d'=1.68s / d_lead=6.67s]: [2026-03-16] Past chat — Booked a dentist appointment: asked for an ea
     9.41s  user  발화 끝
    13.74s  user  발화 시작: 네.
    14.19s  user  발화 끝
    16.02s  agent 발화 끝
    16.52s  user  발화 시작: 맞아요. 혹시 그 예약 다시 확인할 수 있을까요?
    19.22s  <ret> 발화 (turn5 첫 프레임)
    19.62s  agent 발화 시작: <ret> 네, 한 선생님은 서울시 서울대로 백이십삼번지에 계시고, 전화번호는 공 이 일 이 삼 사 오 육 
    19.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: (tool result) Provider: Dr. Han, Dentistry, 123 Seoul St., Seoul; Phon
    19.71s  user  발화 끝
    27.08s  agent 발화 끝
    27.51s  user  발화 시작: 아, 감사합니다. 혹시 이 선생님 다른 병원에도 계신가요?
    31.64s  agent 발화 시작: 죄송해요, 시호님. 다른 병원 정보는 찾을 수 없었습니다.
    31.81s  user  발화 끝
    35.39s  agent 발화 끝
