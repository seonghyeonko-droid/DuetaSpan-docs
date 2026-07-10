# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "민슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-07-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 만돌린은 어떤 악기와 튜닝이 같지 않나요?
     2.31s  <ret> 발화 (turn1 첫 프레임)
     2.61s  agent 발화 시작: <ret> 음, 그 부분에 대한 정보는 아직 찾을 수 없네요.
     2.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: (no information found)
     2.87s  user  발화 끝
     5.99s  agent 발화 끝
     6.37s  user  발화 시작: 아, 그렇군요. 다른 악기에 대해서는 어떨까요?
     9.29s  user  발화 끝
     9.55s  agent 발화 시작: 어떤 악기를 비교해 보고 싶으신가요? 좀 더 자세히 말씀해 주시면 제가 알아볼게요.
    12.35s  user  발화 시작: 네.
    12.71s  user  발화 끝
    15.34s  agent 발화 끝
    15.74s  user  발화 시작: 기타요. 만돌린과 기타 튜닝 차이가 궁금해요.
    19.33s  <ret> 발화 (turn6 첫 프레임)
    19.39s  agent 발화 시작: <ret> 만돌린과 기타는 둘 다 현악기인데, 보통 만돌린은 오도 음정으로, 기타는 사도 음정으로 조율된답니
    19.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: The mandolin and guitar are both stringed instruments, but the mandoli
    19.57s  user  발화 끝
    24.94s  user  발화 시작: 와.
    25.57s  user  발화 끝
    26.71s  agent 발화 끝
