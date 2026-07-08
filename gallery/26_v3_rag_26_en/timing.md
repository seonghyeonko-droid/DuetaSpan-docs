# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was wondering… what country’s flag is black, red, and 
     4.90s  agent 발화 시작: That’s a very common question, actually.
     5.04s  user  발화 끝
     7.15s  <ret> 발화 (turn2 첫 프레임)
     7.38s  agent 발화 시작: <ret> Let me share what I know about national flags. The fla
     7.45s  agent 발화 끝
     9.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.59s]: The flag of Germany is composed of three horizontal bands of black, re
    16.15s  agent 발화 끝
    16.86s  user  발화 시작: Oh, gold, right. Not yellow, exactly.
    19.25s  agent 발화 시작: Indeed, “gold” is the more precise term for that shade.
    19.40s  user  발화 끝
    22.54s  <ret> 발화 (turn5 첫 프레임)
    22.86s  agent 발화 시작: <ret> Speaking of colors, that reminds me of… The Kingdom of
    23.04s  agent 발화 끝
    23.90s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.70s]: The Kingdom of Benin used red coral beads in trade with Europeans as e
    25.37s  user  발화 시작: Yeah.
    25.82s  user  발화 끝
    31.23s  agent 발화 시작: Those beads were highly valued, you see.
    31.34s  agent 발화 끝
    33.53s  <ret> 발화 (turn8 첫 프레임)
    33.91s  agent 발화 시작: <ret> I find the symbolism fascinating, of course. The Asant
    34.14s  agent 발화 끝
    35.13s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.27s]: The Asantehene, the king of the Asante people, traditionally wore gold
    41.38s  agent 발화 끝
    42.70s  user  발화 시작: That's… pretty interesting, actually. But back to flags—
    46.38s  agent 발화 시작: Of course, back to the flags.
    46.40s  user  발화 끝
    48.30s  <ret> 발화 (turn11 첫 프레임)
    48.37s  agent 발화 시작: <ret> Considering the historical context is always useful. T
    48.45s  agent 발화 끝
    49.90s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.17s]: The colors of the German flag are derived from the uniforms of the Lüt
    58.34s  agent 발화 끝
