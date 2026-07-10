# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "지별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이천십팔년 페미나 미스 인디아 월드 우승자는 누구였어? | S2 흐으으음… 근데 집중이 잘 안 돼. | S3 혹시… 요즘 제일 인기 있는 영화가 뭐야? | S4 근데… 영화 예매는 어떻게 해야 돼?

     0.00s  user  발화 시작: 이천십팔년 페미나 미스 인디아 월드 우승자는 누구였어?
     3.67s  <ret> 발화 (turn1 첫 프레임)
     3.75s  user  발화 끝
     3.83s  agent 발화 시작: <ret> 이천십팔년 페미나 미스 인디아 월드 우승자는 아누크리티 바스 씨였어요. 요즘 기분은 어떠세요?
     3.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: Anukreethy Vas was crowned as the winner of the 2018 FBB Femina Miss I
     8.04s  user  발화 시작: 응.
     8.34s  user  발화 끝
    10.93s  agent 발화 끝
    12.32s  user  발화 시작: 음… 그냥 그래. 요즘…
    15.10s  user  발화 끝
    16.48s  user  발화 시작: …좀 힘든 일이 많았거든.
    17.84s  agent 발화 시작: 힘든 일이 많았다니 안타깝네요. 잠시라도 편안하게 쉴 수 있는 시간을 가지셨으면 좋겠어요.
    17.86s  user  발화 끝
    21.34s  user  발화 시작: 음.
    21.84s  user  발화 끝
    24.51s  agent 발화 끝
    24.73s  user  발화 시작: 고마워. 혹시… 명상하는 방법 좀 알려줄 수 있어?
    28.57s  user  발화 끝
    28.60s  agent 발화 시작: 명상은 마음을 차분하게 가라앉히는 데 도움이 될 수 있어요. 편안한 자세로 눈을 감고, 호흡에 집중해 보세요
    36.66s  agent 발화 끝
    36.69s  user  발화 시작: 흐으으음… 근데 집중이 잘 안 돼.
    38.48s  user  발화 끝
    38.56s  agent 발화 시작: 처음에는 집중이 잘 안 되는 게 당연해요. 숨을 들이쉬고 내쉬는 것에만 집중하면 돼요.
    41.42s  user  발화 시작: 응.
    41.77s  user  발화 끝
    44.81s  agent 발화 끝
    45.18s  user  발화 시작: 알았어. 그럼… 오늘 날씨는 어때?
    47.48s  <ret> 발화 (turn13 첫 프레임)
    47.86s  user  발화 끝
    47.87s  agent 발화 시작: <ret> 지금 서울 날씨는 이십육 점 오도이고, 습도는 육십팔%, 바람은 시속 삼 점 이킬로미터예요.
    47.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.08s]: (tool result) The current weather in Seoul is 26.5°C, humidity 68%, wi
    50.66s  user  발화 시작: 진짜?
    51.20s  user  발화 끝
    54.81s  user  발화 시작: 이십육 점 오도나 돼? 더위 조심해야겠다.
    54.95s  agent 발화 끝
    57.72s  user  발화 끝
    57.82s  <ret> 발화 (turn16 첫 프레임)
    57.89s  agent 발화 시작: <ret> 네, 날씨가 많이 더우니 조심하세요. 시원한 물을 자주 마시는 것도 좋은 방법이에요.
    57.90s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.37s]: The population of Tokyo is approximately 13.96 million as of 2023.
    60.93s  user  발화 시작: 응.
    61.15s  user  발화 끝
    63.17s  user  발화 시작: 혹시… 요즘 제일 인기 있는 영화가 뭐야?
    63.26s  agent 발화 끝
    66.67s  <ret> 발화 (turn19 첫 프레임)
    66.75s  agent 발화 시작: <ret> 지금 가장 인기 있는 영화는 드니 빌뇌브 감독의 SF 영화 듄: 파트 이예요.
    66.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.54s]: (tool result) Currently, the most popular movie is “Dune: Part Two”, a
    66.87s  user  발화 끝
    69.11s  user  발화 시작: 어.
    69.60s  user  발화 끝
    73.25s  user  발화 시작: 듄? 한번 찾아봐야겠다.
    73.28s  agent 발화 끝
    74.86s  user  발화 끝
    74.92s  agent 발화 시작: 네, 한번 보시면 좋을 것 같아요. 영화 보면서 잠시나마 스트레스를 잊으실 수 있을 거예요.
    77.88s  user  발화 시작: 어.
    78.24s  user  발화 끝
    81.19s  user  발화 시작: 맞아. 영화가 최고지.
    81.22s  agent 발화 끝
    83.12s  user  발화 끝
    83.17s  agent 발화 시작: 영화는 일상에서 벗어나 잠시 휴식을 취하기에 좋은 방법이죠.
    87.53s  user  발화 시작: 근데… 영화 예매는 어떻게 해야 돼?
    87.62s  agent 발화 끝
    89.63s  <ret> 발화 (turn27 첫 프레임)
    89.93s  user  발화 끝
    89.94s  agent 발화 시작: <ret> 주변 영화관에서 듄: 파트 이를 상영하고 있어요. CGV 강남에서 오후 두시와 일곱시 삼십분에 상
    89.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: (tool result) Searching for movie showtimes near you… “Dune: Part Two”
    94.76s  user  발화 시작: 어.
    95.16s  user  발화 끝
    98.19s  agent 발화 끝
    98.32s  user  발화 시작: 오, CGV 강남이네. 예약해 줄 수 있어?
   101.19s  user  발화 끝
   101.26s  agent 발화 시작: 영화 예약을 도와드릴 수는 없지만, 예매 웹사이트를 찾아드릴 수 있어요.
   106.12s  agent 발화 끝
   107.36s  user  발화 시작: 아… 그렇구나. 알았어. 고마워.
   110.59s  user  발화 끝
   111.16s  agent 발화 시작: 천만에요.
   112.20s  agent 발화 끝
