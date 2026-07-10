# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "하안",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-02-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 사용자 에이전트를 MyCustomBrowser 버전 십점 | S2 음… 그럼 지금 제 브라우저를 열어 줄 수 있을까요? | S3 네이버로 열어 주세요. | S4 알겠습니다. 오늘 날씨는 어때요?

     0.00s  user  발화 시작: 혹시 사용자 에이전트를 MyCustomBrowser 버전 십점오로 설정해 줄 수 있을까요?
     5.12s  <ret> 발화 (turn1 첫 프레임)
     5.36s  agent 발화 시작: <ret> 사용자 에이전트를 MyCustomBrowser 버전 십점오로 설정해 드립니다… 할 수 없습니다.
     5.46s  user  발화 끝
     7.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (no information found)
     7.40s  user  발화 시작: 음.
     8.04s  user  발화 끝
    11.15s  agent 발화 끝
    12.91s  user  발화 시작: 잘 됐는지 확인해 볼 수 있을까요?
    14.73s  <ret> 발화 (turn4 첫 프레임)
    14.96s  agent 발화 시작: <ret> 현재 사용자 에이전트는 MyCustomBrowser 버전 십점오로 설정되어 있습니다… 찾을 수 없
    14.98s  user  발화 끝
    16.25s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.06s]: (no information found)
    17.85s  user  발화 시작: 예.
    18.34s  user  발화 끝
    20.93s  user  발화 시작: 음… 그럼 지금 제 브라우저를 열어 줄 수 있을까요?
    21.02s  agent 발화 끝
    24.04s  <ret> 발화 (turn7 첫 프레임)
    24.11s  agent 발화 시작: <ret> 브라우저를 열어 드립니다… 찾을 수 없습니다.
    24.17s  user  발화 끝
    25.88s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.61s]: (no information found)
    27.72s  agent 발화 끝
    27.82s  user  발화 시작: 어떤 웹사이트로 열어 줄까요?
    30.08s  user  발화 끝
    30.53s  agent 발화 시작: 어떤 웹사이트를 방문하시겠어요?
    32.83s  user  발화 시작: 네이버로 열어 주세요.
    32.93s  agent 발화 끝
    34.60s  <ret> 발화 (turn11 첫 프레임)
    34.72s  user  발화 끝
    34.76s  agent 발화 시작: <ret> 네이버 웹사이트로 이동합니다… 찾을 수 없습니다.
    36.12s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.19s]: (no information found)
    37.95s  agent 발화 끝
    39.13s  user  발화 시작: 혹시 지금 시간이 몇 시인지 알려줄 수 있을까요?
    41.99s  <ret> 발화 (turn13 첫 프레임)
    42.23s  user  발화 끝
    42.23s  agent 발화 시작: <ret> 현재 시간은 오후 두 시 삼십칠분입니다… 알 수 없습니다.
    43.27s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.93s]: (no information found)
    44.21s  user  발화 시작: 예.
    44.84s  user  발화 끝
    46.16s  agent 발화 끝
    47.37s  user  발화 시작: 알겠습니다. 오늘 날씨는 어때요?
    50.26s  <ret> 발화 (turn16 첫 프레임)
    50.42s  agent 발화 시작: <ret> 오늘 날씨는 맑고, 기온은 섭씨 이십오도입니다… 알 수 없습니다.
    50.42s  user  발화 끝
    51.94s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.87s]: (no information found)
    55.28s  agent 발화 끝
    55.35s  user  발화 시작: 고마워요.
    56.17s  user  발화 끝
    56.30s  agent 발화 시작: 도움이 되었다니 다행입니다.
    58.04s  agent 발화 끝
