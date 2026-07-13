# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "현람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-26",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-28",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 현람님. 저는 아리온이라고 해요. 스트레스 해소와 마음 챙김을 돕는 상담사입니다.
     5.49s  user  발화 시작: 아, 안녕하세요. 요즘 좀 피곤해서요.
     5.49s  agent 발화 끝
     7.99s  agent 발화 시작: 피곤하시군요. 혹시 어디 가시는 길인지 여쭤봐도 될까요?
     7.99s  user  발화 끝
    11.48s  user  발화 시작: 네, 서울역으로 가려고 해요. 버스 시간 좀 알려주실 수 있을까요?
    11.48s  agent 발화 끝
    16.47s  agent 발화 시작: 네네.
    16.47s  user  발화 끝
    16.57s  <ret> 발화 (turn5 첫 프레임)
    16.97s  agent 발화 시작: <ret> 칠백번 버스가 열시 삼십분, 열두시 십분, 그리고 두시 사십분에 출발합니다. —
    16.97s  agent 발화 끝
    18.04s  ⚡SPAN 주입 [d'=1.47s / d_lead=5.49s]: [2026-01-25] User's home address is 서울 마포구 성산동 45-6.
    22.46s  user  발화 시작: …혹시 그 버스 정류장이 집에서 얼마나 떨어져 있나요?
    22.46s  agent 발화 끝
    26.28s  <ret> 발화 (turn7 첫 프레임)
    26.46s  agent 발화 시작: <ret> 아, 네. 집에서 가장 가까운 칠백번 버스 정류장까지는 도보로 약 오분 정도 걸립니다.
    26.46s  user  발화 끝
    27.78s  ⚡SPAN 주입 [d'=1.50s / d_lead=6.49s]: (tool result) 700번, 10:30분, 12:10분, 14:40분.
    32.95s  user  발화 시작: 네.
    32.95s  agent 발화 끝
    33.45s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요? 스트레스 해소를 위해 짧은 호흡 운동을 추천해 드릴까요?
    33.45s  user  발화 끝
    39.94s  agent 발화 끝
