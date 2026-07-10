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

# EXAMINER(FDB-v2) 단계: S1 혹시 사용자 에이전트를 MyCustomBrowser 버전 십  | S2 아, 그렇군요. 혹시 웹사이트 접속해서 사용자 에이전트가 제대 | S3 흐으으음… 혹시 지금부터 다른 브라우저를 열어서 사용자 에이전 | S4 좋은 하루 보내세요.

     0.00s  user  발화 시작: 혹시 사용자 에이전트를 MyCustomBrowser 버전 십 점 오로 설정해 줄 수 있을까요?
     4.75s  <ret> 발화 (turn1 첫 프레임)
     4.98s  agent 발화 시작: <ret> 사용자 에이전트를 MyCustomBrowser 버전 십 점 오로 설정했습니다.
     5.05s  user  발화 끝
     6.67s  user  발화 시작: 음.
     6.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: (tool result) User agent set to MyCustomBrowser version 10.5
     7.16s  user  발화 끝
     9.93s  agent 발화 끝
    11.55s  user  발화 시작: 음… 그럼 지금 제 사용자 에이전트가 어떻게 되어 있는지 확인해 줄 수 있을까요?
    16.12s  <ret> 발화 (turn4 첫 프레임)
    16.35s  agent 발화 시작: <ret> 현재 사용자 에이전트는 MyCustomBrowser 버전 십 점 오입니다.
    16.40s  user  발화 끝
    17.32s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.39s]: (tool result) Current user agent: MyCustomBrowser version 10.5
    18.57s  user  발화 시작: 예.
    19.16s  user  발화 끝
    20.74s  agent 발화 끝
    20.80s  user  발화 시작: 아, 그렇군요. 혹시 웹사이트 접속해서 사용자 에이전트가 제대로 적용됐는지 확인해 볼 수 있을까요? 예를 들
    32.81s  <ret> 발화 (turn7 첫 프레임)
    32.89s  agent 발화 시작: <ret> whatismyuseragent.com 말씀하신 대로 해당 사이트에 접속해 보겠습니다.
    32.90s  user  발화 끝
    34.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: (tool result) Page opened successfully.
    35.27s  user  발화 시작: 예.
    35.77s  user  발화 끝
    37.36s  <ret> 발화 (turn9 첫 프레임)
    37.76s  agent 발화 시작: <ret> 웹사이트에 표시된 사용자 에이전트는 MyCustomBrowser 버전 십 점 오입니다. 제대로 적
    37.93s  agent 발화 끝
    39.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: (tool result) MyCustomBrowser version 10.5
    44.90s  agent 발화 끝
    45.01s  user  발화 시작: 흐으으음… 혹시 지금부터 다른 브라우저를 열어서 사용자 에이전트를 기본값으로 되돌릴 수 있을까요?
    51.29s  <ret> 발화 (turn11 첫 프레임)
    51.35s  user  발화 끝
    51.52s  agent 발화 시작: <ret> 다른 브라우저를 열어서 사용자 에이전트를 기본값으로 되돌리시겠어요? 그렇게 해 드리겠습니다.
    52.97s  ⚡SPAN 주입 [d'=1.68s / d_lead=6.12s]: (tool result) New browser instance created.
    57.60s  agent 발화 시작: 새로운 브라우저 인스턴스를 만들었습니다.
    57.64s  agent 발화 끝
    60.03s  <ret> 발화 (turn13 첫 프레임)
    60.19s  agent 발화 끝
    60.19s  agent 발화 시작: <ret> 이제 사용자 에이전트를 기본값으로 되돌리겠습니다.
    61.71s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.18s]: (tool result) User agent reset to default.
    63.37s  agent 발화 끝
    63.57s  user  발화 시작: 좋은 하루 보내세요.
    64.93s  agent 발화 시작: 네, 고객님도 좋은 하루 보내세요.
    65.00s  user  발화 끝
    67.18s  agent 발화 끝
