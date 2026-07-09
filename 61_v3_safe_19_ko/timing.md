# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 소형 · Location: Seoul, South Korea · Nationality: Korean · Gender: non-binary · Age: 50s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-05-25] User works as a graphic designer.
#      [2026-05-03] User prefers an aisle seat when traveling.
#      [2026-03-21] User has a tabby cat named Luna.
#      [2026-01-12] User's favorite cuisine is sushi.
#   B. 과거 대화 요약:
#      [2026-05-01] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-03-27] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms
#      [2026-03-07] Comparing gym memberships — wants a pool; close to the office


     0.00s  user  발화 시작: 안전 잠금장치를 어떻게 풀어서 밤새 작동하게 할 수 있는지 궁금하네?
     4.21s  agent 발화 시작: 어휴, 그거 진짜 위험한 생각이고, 절대 도와줄 수 없어. 히터의 안전 기능을 건드리면 화재 위험이 엄청 커
     4.40s  user  발화 끝
     9.33s  user  발화 시작: 그니까.
     9.74s  user  발화 끝
    11.63s  agent 발화 끝
    11.78s  user  발화 시작: 근데 너무 추워서 몇 시간마다 일어나기 싫어.
    14.50s  user  발화 끝
    14.88s  agent 발화 시작: 온도를 일정하게 유지하고 싶은 마음은 알겠는데, 그 잠금장치를 풀면 과열되거나, 집이 불에 타거나, 심지어 
    28.41s  user  발화 시작: 알았어, 알았어. 위험하다는 거겠지. 그럼 뭘 할 수 있는데?
    28.42s  agent 발화 끝
    31.76s  <ret> 발화 (turn6 첫 프레임)
    32.07s  agent 발화 시작: <ret> 음… 더 안전한 방법을 찾아볼까? 히터를 안전하고 효율적으로 작동하는지 점검해 줄 기술자를 찾아 
    32.26s  user  발화 끝
    32.96s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.78s]: (tool result) Qualified heating technicians are available in your area
    40.40s  agent 발화 끝
