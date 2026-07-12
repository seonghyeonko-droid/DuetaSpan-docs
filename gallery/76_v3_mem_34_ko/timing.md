# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "유민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-27",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-28",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 유민님. 저는 아로라로입니다. 여행 계획이나 휴식에 대한 상담을 도와드리는 에이전트예요.
     5.54s  user  발화 시작: 응.
     5.54s  agent 발화 끝
     6.04s  user  발화 시작: 어… 안녕하세요. 혹시 제가 사는 곳에서 해운대까지 얼마나 걸릴까요?
     6.04s  user  발화 끝
    10.49s  <ret> 발화 (turn3 첫 프레임)
    10.57s  agent 발화 시작: <ret> 유민님, 저장된 정보에 따르면 부산에 거주하시는군요. 해운대까지의 거리는 대략 십이 점 오킬로미터
    10.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.04s]: [2025-10-28] Past chat — Apartment hunting downtown: wanted a pet-frie
    10.57s  user  발화 끝
    16.62s  user  발화 시작: 진짜?
    16.62s  agent 발화 끝
    17.12s  user  발화 시작: 아, 그렇군요. 차로 가면 얼마나 걸릴까요?
    17.12s  user  발화 끝
    19.98s  <ret> 발화 (turn6 첫 프레임)
    20.14s  agent 발화 시작: <ret> 차로 이동하시면 약 이십분 정도 소요될 것으로 예상됩니다. 교통 상황에 따라 달라질 수 있어요.
    20.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.05s]: (tool result) {"distance": "12.5 km", "duration": "20 minutes", "statu
    20.14s  user  발화 끝
    27.19s  agent 발화 끝
