# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-03",
#       "category": "home",
#       "text": "User's home address is 461 Cedar Lane."
#     },
#     {
#       "date": "2026-06-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지 선수, 혹시 무슨 스포츠 하는 사람들 | S2 ITF 대회는 좀 낮은 수준의 대회인가요? | S3 레지 선수는 지금도 선수 활동을 하고 있나요? | S4 백십육위면 그래도 꽤 괜찮은 순위네요.

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지 선수, 혹시 무슨 스포츠 하는 사람들인가요?
     5.41s  user  발화 끝
     5.66s  agent 발화 시작: 두 분 다 테니스 선수이신 걸로 알고 있어요. 좀 더 자세히 알아볼까요?
     9.83s  <ret> 발화 (turn2 첫 프레임)
    10.21s  agent 발화 시작: <ret> 테니스 선수에 대한 정보가 있네요. 잭 소크 선수와 라파엘라 레지 선수 모두 프로 테니스 선수입니
    10.33s  agent 발화 끝
    11.03s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.49s]: [source: Wikipedia] Jack Sock and Raffaella Reggi are both professiona
    14.36s  user  발화 시작: 음.
    14.85s  user  발화 끝
    17.67s  agent 발화 끝
    17.70s  user  발화 시작: 아, 테니스군요. 그런데 그 두 분이 같이 테니스 경기를 했을까요?
    22.45s  agent 발화 시작: 그건 제가 바로 말씀드리기는 어렵네요. 좀 더 찾아봐야 할 것 같아요.
    22.51s  user  발화 끝
    27.48s  <ret> 발화 (turn6 첫 프레임)
    27.63s  agent 발화 시작: <ret> 두 분의 경기 기록을 확인해 봤어요. 잭 소크 선수와 라파엘라 레지 선수는 프로 테니스 경기에서 
    27.73s  agent 발화 끝
    28.68s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.68s]: [source: ESPN] Jack Sock and Raffaella Reggi have never competed again
    36.11s  agent 발화 끝
    37.01s  user  발화 시작: 어머, 그럼 두 분은 그냥 테니스 선수라는 것 말고는 아무 관계가 없다는 거네요?
    43.05s  agent 발화 시작: 꼭 그렇지는 않을 수도 있어요. 두 분 모두 테니스 선수라는 공통점이 있으니까요.
    43.22s  user  발화 끝
    44.81s  user  발화 시작: 네.
    45.45s  user  발화 끝
    48.35s  agent 발화 시작: 혹시 두 분의 다른 활동에 대해 궁금하신가요?
    48.42s  agent 발화 끝
    51.40s  agent 발화 끝
    51.81s  user  발화 시작: 음… 레지 선수는 주로 어떤 대회에 나가는 선수예요?
    56.86s  <ret> 발화 (turn12 첫 프레임)
    57.01s  agent 발화 시작: <ret> 라파엘라 레지 선수는 주로 ITF 여자 테니스 회로 대회에 출전했고, 최고 싱글 랭킹은 백육십삼위
    57.27s  user  발화 끝
    58.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.21s]: [source: WTA Official Website] Raffaella Reggi has primarily competed 
    63.32s  user  발화 시작: 진짜요?
    64.23s  user  발화 끝
    65.22s  agent 발화 끝
    65.79s  user  발화 시작: ITF 대회는 좀 낮은 수준의 대회인가요?
    69.12s  user  발화 끝
    69.50s  agent 발화 시작: 일반적으로는 ATP나 WTA 투어보다는 낮은 수준으로 여겨지지만, 실력 있는 선수들이 많이 참여합니다.
    77.70s  agent 발화 끝
    77.86s  user  발화 시작: 그렇군요. 그럼 잭 소크 선수는 어떤 대회에 주로 나가는 편인가요?
    82.86s  <ret> 발화 (turn17 첫 프레임)
    83.17s  agent 발화 시작: <ret> 잭 소크 선수는 네대 그랜드 슬램 대회에 모두 출전했고, 이천십칠년 US 오픈에서 팔강에 진출했습
    83.41s  user  발화 끝
    84.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: [source: ATP Official Website] Jack Sock has competed in all four Gran
    88.26s  user  발화 시작: 그렇군요.
    89.08s  user  발화 끝
    90.91s  agent 발화 끝
    91.97s  user  발화 시작: 네대 그랜드 슬램… 잭 소크 선수는 좀 유명한 선수인가 보네요.
    97.28s  agent 발화 시작: 네, 잭 소크 선수는 꽤 유명한 선수입니다. 특히 US 오픈에서의 활약이 기억에 남죠.
    97.42s  user  발화 끝
   101.13s  user  발화 시작: 음.
   101.57s  user  발화 끝
   102.97s  user  발화 시작: 레지 선수는 지금도 선수 활동을 하고 있나요?
   103.16s  agent 발화 끝
   106.09s  <ret> 발화 (turn23 첫 프레임)
   106.40s  user  발화 끝
   106.48s  agent 발화 시작: <ret> 라파엘라 레지 선수는 이천십팔년에 프로 테니스 선수로서 은퇴했습니다.
   108.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: [source: Tennis Abstract] Raffaella Reggi retired from professional te
   111.66s  agent 발화 끝
   111.67s  user  발화 시작: 아, 은퇴했군요. 그럼 지금은 뭘 하고 있을까요?
   115.00s  agent 발화 시작: 은퇴 후의 활동에 대한 정보는 찾기 어렵네요.
   115.19s  user  발화 끝
   118.52s  agent 발화 끝
   119.14s  user  발화 시작: 잭 소크 선수는 지금도 선수 생활을 계속하고 있나요?
   122.53s  <ret> 발화 (turn27 첫 프레임)
   122.60s  agent 발화 시작: <ret> 잭 소크 선수는 이천이십삼년 십일월 현재 세계 랭킹 백십육위입니다.
   122.84s  user  발화 끝
   124.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: [source: ATP Official Website] Jack Sock is currently ranked 116th in 
   128.29s  user  발화 시작: 백십육위면 그래도 꽤 괜찮은 순위네요.
   128.30s  agent 발화 끝
   131.52s  agent 발화 시작: 네, 훌륭한 순위라고 할 수 있습니다. 꾸준히 노력하고 계신 것 같아요.
   131.66s  user  발화 끝
   134.68s  user  발화 시작: 음.
   135.29s  user  발화 끝
   136.72s  user  발화 시작: 두 분에 대해 좀 알게 됐네요. 감사합니다.
   136.93s  agent 발화 끝
   140.04s  user  발화 끝
   140.37s  agent 발화 시작: 도움이 되었다니 다행입니다. 혹시 다른 궁금한 점이 있으신가요?
   142.07s  user  발화 시작: 아.
   142.79s  user  발화 끝
   145.09s  agent 발화 끝
   145.10s  user  발화 시작: 아니요, 오늘은 이 정도로 충분해요.
   148.15s  user  발화 끝
   148.58s  agent 발화 시작: 좋습니다. 언제든지 또 찾아주세요.
   151.16s  agent 발화 끝
