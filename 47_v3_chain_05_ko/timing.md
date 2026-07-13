# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "민은",
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
#       "date": "2026-06-10",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 지금 강남역 주변 교통 상황이 어때?
     3.03s  <ret> 발화 (turn1 첫 프레임)
     3.33s  agent 발화 시작: <ret> 강남역 주변 교통 상황은 현재 보통이에요. 평균 속도는 시속 사십오킬로미터 정도 됩니다.
     3.33s  user  발화 끝
     4.33s  ⚡SPAN 주입 [d'=1.30s / d_lead=6.66s]: (tool result) The traffic in the area bounded by 34.0522, -118.2437, 3
     9.99s  user  발화 시작: 음.
     9.99s  agent 발화 끝
    10.55s  user  발화 시작: 아, 그렇군요. 그럼, 거기서 삼성역까지 가는 데 얼마나 걸릴까요?
    10.55s  user  발화 끝
    14.96s  <ret> 발화 (turn4 첫 프레임)
    15.55s  agent 발화 시작: <ret> 강남역에서 삼성역까지는 육 점 팔킬로미터이고, 십오분 정도 걸릴 것으로 예상됩니다.
    15.55s  user  발화 끝
    15.93s  ⚡SPAN 주입 [d'=0.97s / d_lead=5.55s]: (tool result) {"distance": "6.8 km", "duration": "15 minutes", "status
    21.10s  user  발화 시작: 네.
    21.10s  agent 발화 끝
    21.65s  user  발화 시작: 십오분 정도면 괜찮네요. 고마워요.
    21.65s  user  발화 끝
    23.87s  agent 발화 시작: [happy] 도움이 되어서 기쁩니다.
    23.87s  user  발화 끝
    26.09s  agent 발화 끝
