# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "세서",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-04-16",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-09-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-02-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 알람이 뭐뭐 설정되어 있는지 알려줘. | S2 …여덟시 반 알람은 완전히 삭제해 줘. | S3 음… 최신 개봉작 중에… 아, '아메리칸 그래피티' 보고 싶어 | S4 그럼, '범죄도시 사' 예매해 줘.

     0.00s  user  발화 시작: 알람이 뭐뭐 설정되어 있는지 알려줘.
     2.19s  <ret> 발화 (turn1 첫 프레임)
     2.51s  agent 발화 시작: <ret> 알람은 두 개가 설정되어 있어요. 아침 일곱시에 기상 알람, 그리고 여덟시 삼십분에 회의 알람이요
     2.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.02s]: (tool result) 07:00 AM - Wake up, 08:30 AM - Meeting reminder
     2.51s  user  발화 끝
     9.52s  user  발화 시작: 오.
     9.52s  agent 발화 끝
    10.02s  user  발화 시작: 아, 일곱시 알람은… 일곱시 반으로 바꿔줘.
    10.02s  user  발화 끝
    12.63s  <ret> 발화 (turn4 첫 프레임)
    13.03s  agent 발화 시작: <ret> 네, 알람 시간을 일곱시 반으로 변경했고, 아이 디는 팔 오 구 이 일이에요.
    13.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.52s]: (tool result) Alarm updated: 07:30 AM - Wake up, ID: 85921
    13.03s  user  발화 끝
    19.55s  user  발화 시작: 팔 오 구 이 일… 아, 그게 아니라…
    19.55s  agent 발화 끝
    23.56s  user  발화 시작: …여덟시 반 알람은 완전히 삭제해 줘.
    23.56s  user  발화 끝
    26.16s  <ret> 발화 (turn7 첫 프레임)
    26.56s  agent 발화 시작: <ret> 회의 알람은 삭제했고, 아이 디는 이 구 사 칠 삼이었어요.
    26.56s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.01s]: (tool result) Alarm deleted: 08:30 AM - Meeting reminder, ID: 29473
    26.56s  user  발화 끝
    31.58s  user  발화 시작: 어어.
    31.58s  agent 발화 끝
    32.08s  agent 발화 시작: 혹시 다른 알람도 수정하거나 추가할까요?
    32.08s  user  발화 끝
    34.58s  user  발화 시작: 아니, 지금은 괜찮아. 이번 주 토요일에 영화 예매 좀 해줘.
    34.58s  agent 발화 끝
    39.60s  agent 발화 시작: 이번 주 토요일 영화 예매요? 어떤 영화를 보고 싶으세요?
    39.60s  user  발화 끝
    44.11s  user  발화 시작: 음… 최신 개봉작 중에… 아, '아메리칸 그래피티' 보고 싶어.
    44.11s  agent 발화 끝
    48.38s  <ret> 발화 (turn13 첫 프레임)
    48.62s  agent 발화 시작: <ret> '아메리칸 그래피티'는 천구백칠십삼년 팔월 십일일에 개봉한 조지 루카스 감독의 영화예요.
    48.62s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.01s]: '아메리칸 그래피티'는 1973년 8월 11일에 개봉한 조지 루카스 감독의 영화입니다.
    48.62s  user  발화 끝
    53.63s  user  발화 시작: 진짜?
    53.63s  agent 발화 끝
    54.13s  user  발화 시작: 천구백칠십삼년이 아니라, 지금 상영하는 영화 말하는 거야.
    54.13s  user  발화 끝
    57.64s  agent 발화 시작: 아, 죄송해요. 현재 상영 중인 '아메리칸 그래피티'는 없네요. 다른 영화를 찾으시겠어요?
    57.64s  user  발화 끝
    63.15s  user  발화 시작: 맞아.
    63.15s  agent 발화 끝
    63.65s  user  발화 시작: 그럼, '범죄도시 사' 예매해 줘.
    63.65s  user  발화 끝
    65.92s  <ret> 발화 (turn19 첫 프레임)
    66.16s  agent 발화 시작: <ret> '범죄도시 사'는 씨 지 브이 강남에서 오후 두시, 다섯시, 여덟시에 상영돼요.
    66.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: (tool result) 범죄도시 4 - CGV 강남, 14:00, 17:00, 20:00
    66.16s  user  발화 끝
    71.67s  user  발화 시작: 다섯시로 예매해 줘.
    71.67s  agent 발화 끝
    73.10s  <ret> 발화 (turn21 첫 프레임)
    73.18s  agent 발화 시작: <ret> 네, '범죄도시 사' 씨 지 브이 강남 오후 다섯시 두석 예매가 완료됐어요. 확인 아이 디는 오 
    73.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.02s]: (tool result) Booking confirmed: 범죄도시 4, CGV 강남, 17:00, 2 seats, confi
    73.18s  user  발화 끝
    83.20s  agent 발화 끝
