# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 오톨란에 대한 이야기를 읽어봤는데… 프랑스에서는 오톨란을 먹을 수 없다고 하던데, 사실이에요?
     6.11s  agent 발화 시작: 재밌는 질문인데.
     6.35s  user  발화 끝
     6.51s  <ret> 발화 (turn2 첫 프레임)
     7.11s  agent 발화 시작: <ret> 음, 좀 복잡해… 프랑스에서는 1981년부터 꾀꼬리 먹는 게 불법이었거든.
     7.40s  agent 발화 끝
     7.51s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.27s]: The ortolan bunting is a small migratory bird whose consumption has be
    12.99s  agent 발화 끝
    13.34s  user  발화 시작: 아, 대박. 왜요? 멸종 위기에 처했거나 그런 건가요?
    16.24s  agent 발화 시작: 단순히 멸종 위기보다는 좀 더 복잡한 문제야, 사실.
    16.38s  user  발화 끝
    18.92s  <ret> 발화 (turn5 첫 프레임)
    19.52s  agent 발화 시작: <ret> 그 이유를 좀 알아볼까… 예전에는 서식지 파괴랑 맛 때문에 과도하게 잡아서 오톨란 개체 수가 줄었
    19.62s  agent 발화 끝
    19.92s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.46s]: Historically hunted for their rich flavor, ortolan populations decline
    26.00s  agent 발화 끝
    26.19s  user  발화 시작: 그렇다면, 과거의 일인가요? 예전에 사람들은 오톨란을 흔히 먹었다는 건가요?
    31.71s  user  발화 끝
    31.79s  agent 발화 시작: [laugh] 응, 꽤 많이 먹었지. 물론 항상 고급 음식으로 여겨졌어.
    35.30s  <ret> 발화 (turn8 첫 프레임)
    35.90s  agent 발화 시작: <ret> 전통이 어떻게 변하는지 정말 흥미롭네… 예전에는 오톨란을 먹는 게 프랑스 요리에서 부와 지위를 나
    35.95s  agent 발화 끝
    36.30s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.33s]: The consumption of ortolan was historically a symbol of wealth and sta
    42.89s  agent 발화 끝
