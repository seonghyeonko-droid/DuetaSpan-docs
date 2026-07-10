# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "은연",
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
#       "date": "2026-05-20",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지 선수, 혹시 무슨 스포츠 하는 선수들 | S2 윔블던에서도 우승했었다고요? 어렸을 때부터 테니스에 재능이 있 | S3 리우 올림픽에도 같이 참가했었나요? 신기하네요. | S4 은퇴했다고요? 벌써 은퇴했군요. 아쉽네요.

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지 선수, 혹시 무슨 스포츠 하는 선수들이에요?
     2.73s  <ret> 발화 (turn1 첫 프레임)
     3.12s  agent 발화 시작: <ret> 잠시 확인해 볼게요.
     3.23s  user  발화 끝
     4.41s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.33s]: [source: Wikipedia] Jack Sock and Raffaella Reggi are both professiona
     6.45s  agent 발화 끝
     6.56s  agent 발화 시작: 잭 소크 선수와 라파엘라 레지 선수 모두… 프로 테니스 선수입니다.
     6.63s  user  발화 시작: 네.
     6.96s  agent 발화 끝
     7.24s  user  발화 시작: 테니스요? 음… 제가 알기로는 잭 소크 선수는 테니스 말고 다른 운동도 조금 하는 것 같던데.
     9.49s  user  발화 끝
    15.94s  <ret> 발화 (turn5 첫 프레임)
    15.96s  user  발화 끝
    16.17s  agent 발화 시작: <ret> 잭 소크 선수는 이천십칠년 십일월에 ATP 단식 랭킹 팔위까지 오르셨습니다.
    17.14s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.35s]: [source: ATP Tour] Jack Sock achieved a career-high ATP singles rankin
    18.52s  agent 발화 끝
    18.70s  user  발화 시작: 팔위까지 올랐다고요? 대단하네요. 그런데 라파엘라 레지 선수는요? 테니스 랭킹은 어느 정도인가요?
    23.29s  <ret> 발화 (turn7 첫 프레임)
    23.43s  user  발화 끝
    23.52s  agent 발화 시작: <ret> 라파엘라 레지 선수는 이천사년 십월에 WTA 단식 랭킹 이백이위까지 오르셨습니다.
    25.12s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.74s]: [source: WTA Tour] Raffaella Reggi reached her highest WTA singles ran
    27.27s  agent 발화 끝
    27.84s  user  발화 시작: 이백이위면… 그렇게 높은 랭킹은 아니네요. 잭 소크 선수랑 비교하면 많이 차이가 나는 것 같아요.
    37.84s  <ret> 발화 (turn9 첫 프레임)
    38.07s  agent 발화 시작: <ret> 잭 소크 선수는 이천십년 윔블던 보이즈 싱글 타이틀을 획득했습니다.
    38.08s  user  발화 끝
    39.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: [source: ITF Juniors] Jack Sock won the 2010 Wimbledon boys' singles t
    42.28s  agent 발화 끝
    42.76s  user  발화 시작: 윔블던에서도 우승했었다고요? 어렸을 때부터 테니스에 재능이 있었던 것 같네요.
    47.65s  <ret> 발화 (turn11 첫 프레임)
    47.80s  agent 발화 시작: <ret> 라파엘라 레지 선수는 이천일년부터 이탈리아 페드컵 대표로 활약하셨습니다.
    47.99s  user  발화 끝
    49.17s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.27s]: [source: ESPN] Raffaella Reggi has represented Italy in Fed Cup compet
    51.07s  agent 발화 끝
    51.68s  user  발화 시작: 페드컵에서도 이탈리아를 대표했군요. 잭 소크 선수도 국가대표로 활동했나요?
    60.44s  user  발화 끝
    60.51s  <ret> 발화 (turn13 첫 프레임)
    60.74s  agent 발화 시작: <ret> 잭 소크 선수는 이천칠년 주니어 데이비스컵에서 우승한 미국 팀의 일원이었습니다.
    61.01s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.63s]: [source: US Open] Jack Sock was part of the United States team that wo
    61.14s  user  발화 시작: 진짜요?
    61.37s  agent 발화 끝
    62.86s  user  발화 시작: 주니어 데이비스컵 우승도 했었군요. 두 분 다 어릴 때부터 좋은 성적을 거둔 것 같아요.
    63.21s  user  발화 끝
    67.31s  <ret> 발화 (turn16 첫 프레임)
    67.46s  agent 발화 시작: <ret> 잭 소크 선수와 라파엘라 레지 선수 모두 이천십육년 리우 올림픽에 참가하셨습니다.
    67.58s  user  발화 끝
    69.15s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.49s]: [source: Tennis.com] Jack Sock and Raffaella Reggi both competed at th
    71.95s  agent 발화 끝
    72.19s  user  발화 시작: 리우 올림픽에도 같이 참가했었나요? 신기하네요.
    84.68s  <ret> 발화 (turn18 첫 프레임)
    84.91s  agent 발화 시작: <ret> 잭 소크 선수는 이천십육년 리우 올림픽 남자 복식에서 동메달을 획득했습니다.
    85.18s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.82s]: [source: BBC Sport] Jack Sock won a bronze medal in men's doubles at t
    85.18s  user  발화 끝
    85.27s  user  발화 시작: 그렇군요.
    85.69s  user  발화 시작: 동메달까지 땄었다고요? 대단하네요. 라파엘라 레지 선수는 리우 올림픽에서 어떤 성적을 거뒀나요?
    85.73s  agent 발화 끝
    89.69s  <ret> 발화 (turn21 첫 프레임)
    89.85s  user  발화 끝
    89.95s  user  발화 끝
    90.00s  agent 발화 시작: <ret> 라파엘라 레지 선수는 이천십육년 리우 올림픽에서 메달을 획득하지 못했습니다.
    90.08s  user  발화 시작: 네네.
    90.13s  ⚡SPAN 주입 [d'=0.44s / d_lead=0.44s]: [source: Olympic.org] Raffaella Reggi did not win a medal at the 2016 
    90.44s  agent 발화 끝
    90.47s  user  발화 시작: 아, 메달은 못 땄군요. 그래도 올림픽에 참가했다는 것 자체가 대단한 일이죠.
    92.81s  user  발화 끝
   100.62s  <ret> 발화 (turn24 첫 프레임)
   100.76s  user  발화 끝
   100.78s  agent 발화 시작: <ret> 잭 소크 선수는 이천이십삼년 십이월에 프로 테니스에서 은퇴했습니다.
   101.75s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.44s]: [source: The Guardian] Jack Sock retired from professional tennis in D
   103.23s  agent 발화 끝
   103.91s  user  발화 시작: 은퇴했다고요? 벌써 은퇴했군요. 아쉽네요.
   106.76s  <ret> 발화 (turn26 첫 프레임)
   106.96s  user  발화 끝
   107.00s  agent 발화 시작: <ret> 라파엘라 레지 선수는 이천이십사년 일월 현재까지도 프로 테니스 선수로 활발하게 활동하고 계십니다.
   108.28s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.35s]: [source: WTA Tennis] Raffaella Reggi is still actively competing in pr
   111.35s  agent 발화 끝
   111.49s  user  발화 시작: 라파엘라 레지 선수는 아직도 활동하고…
   117.85s  user  발화 끝
   119.38s  user  발화 시작: …계시는군요. 두 분의 앞날을 응원해야겠네요.
   122.75s  agent 발화 시작: 두 분의 앞날을 응원하며, 테니스 팬으로서 즐겁게 지켜보는 것이 좋겠습니다.
   122.84s  user  발화 끝
   133.78s  agent 발화 끝
