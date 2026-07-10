# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "유준",
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
#       "date": "2026-06-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 너무 바빠서 잠깐이라도 영화 볼 시간이 없네. 혹시 이번 | S2 응, 바비에 대해서 좀 더 자세히 알려줘. 언제, 어디서 상영 | S3 CGV 강남으로 예매 좀 해줘. 오늘 오후 다섯시로. | S4 아니, 괜찮아. 즐거운 하루 보내세요.

     0.00s  user  발화 시작: 요즘 너무 바빠서 잠깐이라도 영화 볼 시간이 없네. 혹시 이번 주에 볼 만한 영화 좀 추천해 줄 수 있어?
     6.91s  agent 발화 시작: 어떤 장르를 좋아하시는지 여쭤봐도 될까요? 혹시 좋아하는 배우나 감독이 있으신가요?
     7.13s  user  발화 끝
    12.06s  agent 발화 끝
    12.53s  user  발화 시작: 음… 코미디나 로맨틱 코미디 정도면 좋을 것 같아. 딱히 좋아하는 배우는 없어.
    17.40s  <ret> 발화 (turn3 첫 프레임)
    17.63s  agent 발화 시작: <ret> 현재 상영 중인 코미디 영화로는 슈퍼 마리오 브라더스, 바비, 오펜하이머가 있어요. 바비가 평점이
    17.90s  user  발화 끝
    19.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: (tool result) The Super Mario Bros. Movie — Nintendo/Illumination (202
    23.17s  user  발화 시작: 네.
    23.79s  user  발화 끝
    24.82s  agent 발화 시작: 네, 바비는 평론가와 관객 모두에게 좋은 평가를 받고 있어요. 혹시 바비 영화에 대해 더 자세히 알아볼까요?
    24.86s  agent 발화 끝
    31.11s  agent 발화 끝
    31.57s  user  발화 시작: 응, 바비에 대해서 좀 더 자세히 알려줘. 언제, 어디서 상영하는지.
    36.01s  <ret> 발화 (turn7 첫 프레임)
    36.41s  agent 발화 시작: <ret> 바비는 CGV 강남에서 오후 두시 반, 다섯시, 일곱시 반에 상영하고요, 롯데시네마 홍대에서는 세
    36.48s  user  발화 끝
    38.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.15s]: (tool result) 바비 — CGV 강남, 14:30, 17:00, 19:30; 롯데시네마 홍대, 15:00, 17:30
    50.55s  user  발화 시작: CGV 강남으로 예매 좀 해줘. 오늘 오후 다섯시로.
    50.56s  agent 발화 끝
    54.74s  <ret> 발화 (turn9 첫 프레임)
    54.82s  agent 발화 시작: <ret> 네, CGV 강남 바비 오늘 오후 다섯시 A12 좌석으로 예매 완료되었습니다. 총 금액은 이만 이
    54.94s  user  발화 끝
    56.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.99s]: (tool result) CGV 강남, 바비, 2026-07-10 17:00, A12, 22000원, 20260710-B89
    65.81s  agent 발화 끝
    65.92s  user  발화 시작: 고마워.
    66.65s  user  발화 끝
    66.94s  agent 발화 시작: 천만에요. 혹시 다른 영화도 예매해 드릴까요?
    69.56s  agent 발화 끝
    70.03s  user  발화 시작: 아니, 괜찮아. 즐거운 하루 보내세요.
    72.69s  agent 발화 시작: 네, 좋은 하루 보내세요.
    72.94s  user  발화 끝
    74.10s  agent 발화 끝
