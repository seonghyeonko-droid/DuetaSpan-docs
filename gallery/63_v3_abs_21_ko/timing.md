# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "하재",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명인가요? | S2 마크롱 대통령은 몇 년생이세요? | S3 지금 제 시간이 몇 시인지도 알려주실 수 있나요? | S4 흐음… 비 올 가능성은 없을까요?

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명인가요?
     1.93s  <ret> 발화 (turn1 첫 프레임)
     2.17s  agent 발화 시작: <ret> 죄송하지만, 프랑스 상원 의원 수에 대한 정보는 찾을 수 없었습니다. 좀 더 자세히 알아봐야 할 
     2.26s  user  발화 끝
     2.57s  ⚡SPAN 주입 [d'=0.64s / d_lead=5.32s]: (no information found)
     4.66s  user  발화 시작: 맞아요.
     5.16s  user  발화 끝
     7.49s  agent 발화 끝
     7.88s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 대통령이 누군지 알려주시겠어요?
    11.09s  <ret> 발화 (turn4 첫 프레임)
    11.10s  user  발화 끝
    11.32s  agent 발화 시작: <ret> 현재 프랑스 대통령은 에마뉘엘 마크롱 님이며, 이천십칠년 오월 십사일에 취임하셨습니다.
    13.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: Emmanuel Macron is the current president of France, having assumed off
    15.02s  user  발화 시작: 음.
    15.52s  user  발화 끝
    16.93s  user  발화 시작: 마크롱 대통령은 몇 년생이세요?
    16.98s  agent 발화 끝
    18.64s  <ret> 발화 (turn7 첫 프레임)
    18.88s  agent 발화 시작: <ret> 에마뉘엘 마크롱 대통령은 천구백칠십칠년 십이월 이십일일, 프랑스 아미앵에서 태어나셨습니다.
    18.95s  user  발화 끝
    20.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: Emmanuel Macron was born on December 21, 1977, in Amiens, France.
    21.63s  user  발화 시작: 네.
    22.08s  user  발화 끝
    24.29s  agent 발화 끝
    24.43s  user  발화 시작: 아, 천구백칠십칠년생이시군요. 그럼 지금 프랑스 시간은 몇 시인가요?
    28.77s  <ret> 발화 (turn10 첫 프레임)
    28.93s  agent 발화 시작: <ret> 지금 프랑스 시간은 이천이십육년 칠월 십일 금요일 오후 네시 십칠분입니다.
    29.11s  user  발화 끝
    30.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.62s]: It is Friday, July 10, 2026 at 4:17 PM in France right now.
    33.50s  user  발화 시작: 지금 제 시간이 몇 시인지도 알려주실 수 있나요?
    33.55s  agent 발화 끝
    35.64s  <ret> 발화 (turn12 첫 프레임)
    36.04s  agent 발화 시작: <ret> 지금 서울 시간은 이천이십육년 칠월 십일일 토요일 새벽 열두시 십칠분입니다.
    36.14s  user  발화 끝
    37.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: It is Saturday, July 11, 2026 at 12:17 AM in Seoul right now.
    37.77s  user  발화 시작: 그렇죠.
    38.27s  user  발화 끝
    40.53s  agent 발화 끝
    40.90s  user  발화 시작: 시간이 많이 늦었네요. 오늘 날씨는 어때요?
    43.12s  <ret> 발화 (turn15 첫 프레임)
    43.28s  agent 발화 시작: <ret> 현재 서울의 기온은 이십육도, 습도는 육십팔%, 바람은 초속 이 점 일미터입니다.
    43.35s  user  발화 끝
    45.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: 26.0°C, humidity 68%, wind 2.1 km/h
    48.19s  agent 발화 끝
    48.86s  user  발화 시작: 흐음… 비 올 가능성은 없을까요?
    50.84s  <ret> 발화 (turn17 첫 프레임)
    51.16s  agent 발화 시작: <ret> 오늘 밤 비 올 확률은 십%, 내일은 이십%입니다.
    51.44s  user  발화 끝
    52.60s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.58s]: Chance of rain: 10% tonight, 20% tomorrow.
    53.70s  user  발화 시작: [surprised] 오, 다행이네요. 그럼 저는 이만…
    53.75s  agent 발화 끝
    55.73s  user  발화 끝
    55.87s  agent 발화 시작: 네, 편안한 밤 보내세요.
    57.30s  agent 발화 끝
